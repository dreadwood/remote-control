import internal from "stream";
import { drawCommand } from "./commands/draw";
import { mouseCommand } from "./commands/mouse";
import { prntCommand } from "./commands/prnt";

export const duplexDataHandler = (duplex: internal.Duplex, data: string) => {
  try {
    const [fullCommand, ...value] = data.split(' ')
    const [command, action] = fullCommand.split('_')
  
    switch (command) {
      case 'mouse':
        mouseCommand(duplex, action, value)
        break;
  
      case 'draw':
        drawCommand(duplex, action, value)
        break;
  
      case 'prnt':
        prntCommand(duplex, action)
        break;
    
      default:
        console.log(`What the hell? What's the command: ${command}?`);
        break;
    }
  } catch (err) {
    console.log(err);
  }
}
