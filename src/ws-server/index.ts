import { WebSocketServer } from 'ws';

export const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
  
    ws.send('something');
  });

  return wss;
}
