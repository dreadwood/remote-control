import internal from "stream";
import { mouse, Region, screen } from "@nut-tree/nut-js";
import { SCREENSHOT_SIZE } from "../const";
import Jimp from "jimp";

export const prntCommand = async (duplex: internal.Duplex, action: string) => {
  try {
    const {x, y} = await mouse.getPosition()

    const left = x - SCREENSHOT_SIZE / 2
    const top = y - SCREENSHOT_SIZE / 2

    const region = new Region(
      left >= 0 ? left : 0,
      top >= 0 ? top : 0,
      SCREENSHOT_SIZE,
      SCREENSHOT_SIZE
    );

    const image = await screen.grabRegion(region);
    const imageRGB = await image.toRGB();

    const buffer = await (new Jimp(imageRGB)).getBufferAsync(Jimp.MIME_PNG);
    const base64 = buffer.toString('base64');

    duplex.write(`prnt_${action} ${base64}`)
  } catch (err) {
    console.log(err);
  }
}