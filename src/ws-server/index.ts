import { WebSocketServer, createWebSocketStream } from 'ws';
import { mouseCommand } from '../commands/mouse';

// <- mouse_up {y px}
// <- mouse_down {y px}
// <- mouse_left {x px}
// <- mouse_right {x px}

// <- mouse_position
// ---> mouse_position {x px},{y px}

// <- draw_circle {px}
// <- draw_rectangle {px} {px}
// <- draw_square {px}

// <- prnt_scrn
// ---> prnt_scrn {base64 string (png buf)}

export const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port }, () => {
    console.log(`Start web socket server on the ${port} port!`)
  });

  wss.on('connection', async function connection(ws) {
    console.log('connection start!');

    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('data', (data) => {
      const [fullCommand, ...value] = data.split(' ')
      const [command, action] = fullCommand.split('_')

      switch (command) {
        case 'mouse':
          mouseCommand(duplex, action, value)
          break;

        case 'draw':
          
          break;

        case 'prnt':
          
          break;
      
        default:
          console.log(`What the hell? What's the command: ${command}?`);
          break;
      }
    })

  
    ws.send('connected');
  });

  return wss;
}
