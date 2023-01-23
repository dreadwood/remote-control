import { WebSocketServer, createWebSocketStream } from 'ws';
import { duplexDataHandler } from '../duplex-data-handler';

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
    console.log('Connection start!');

    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

    duplex.on('data', (data) => duplexDataHandler(duplex, data))

  
    ws.send('connected');
  });

  return wss;
}
