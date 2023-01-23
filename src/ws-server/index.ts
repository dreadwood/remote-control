import { WebSocketServer, createWebSocketStream } from 'ws';
import { duplexDataHandler } from '../duplex-data-handler';

export const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port }, () => {
    console.log(`Start web socket server on the ${port} port!`)
  });

  wss.on('connection', async function connection(ws) {
    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
    duplex.on('data', (data) => duplexDataHandler(duplex, data))
    
    ws.send('connected');
    ws.on('close', () => console.log(`Connection closed!`));

    console.log('Connection start!');
  });

  process.on('SIGINT', () => {
    process.exit();
  });

  process.on('exit', () => {
    wss.clients.forEach((ws) => ws.terminate())
    wss.close();

    console.log('Web socket server connection closed');
  });
}
