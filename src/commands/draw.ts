import { mouse, left, right, up, down, straightTo } from "@nut-tree/nut-js";
import internal from "stream";

const drawRectangle = async (width: number, length: number) => {
  await mouse.drag(right(width));
  await mouse.drag(down(length));
  await mouse.drag(left(width));
  await mouse.drag(up(length));
}

const drawCircle = async (radius: number) => {
  const {x: startX, y: startY} = await mouse.getPosition()

  const points = [];

  for (let rad = 0; rad <= 2 * Math.PI; rad = rad + 1 / radius) {
    const x = startX + radius * Math.cos(rad) - radius;
    const y = startY + radius * Math.sin(rad);

    points.push({ x, y });
  }

  await mouse.drag(points);
}

export const drawCommand = async (duplex: internal.Duplex, action: string, valueArr: string[]) => {
  try {
    const [value1, value2] = valueArr
    const px1 = Number(value1)
    const px2 = Number(value2)

    switch (action) {
      case 'circle':
        drawCircle(px1)
        duplex.write(`draw_${action}_${px1}`)
        break;
      case 'rectangle':
        drawRectangle(px1, px2)
        duplex.write(`draw_${action}_${px1}_${px2}`)
        break;
      case 'square':
        drawRectangle(px1, px1);
        duplex.write(`draw_${action}_${px1}`)
        break;
    }
    
  } catch (err) {
    console.log(err);
  }
}