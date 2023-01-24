import internal from "stream";
import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export const mouseCommand = async (duplex: internal.Duplex, action: string, valueArr: string[]) => {
  try {
    const [value] = valueArr
    const px = Number(value)
  
    switch (action) {
      case 'up':
        await mouse.move(up(px));
        duplex.write(`mouse_${action}_${px}`)
        break;
      case 'left':
        await mouse.move(left(px));
        duplex.write(`mouse_${action}_${px}`)
        break;
      case 'down':
        await mouse.move(down(px));
        duplex.write(`mouse_${action}_${px}`)
        break;
      case 'right':
        await mouse.move(right(px));
        duplex.write(`mouse_${action}_${px}`)
        break;
      case 'position':
        const {x, y} = await mouse.getPosition()
        duplex.write(`mouse_position_${x},${y}`)
        break;
    }
  } catch (err) {
    console.log(err);
  }
}