import { HTTP_PORT, WS_PORT } from './src/const.js'
import { httpServer } from './src/http-server/index.js'
import { createWSServer } from './src/ws-server/index.js';
// import { mouse } from "@nut-tree/nut-js";

const httpPort = process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : HTTP_PORT;
const wsPort = process.env.WS_PORT ? Number(process.env.WS_PORT) : WS_PORT;

// console.log(wsPort, process.env.WS_PORT);

console.log(`Start static http server on the ${httpPort} port!`)
httpServer.listen(httpPort)

createWSServer(wsPort)
