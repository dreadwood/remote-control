# Remote Control

Task is implement remote control backend using [nutjs.dev](https://nutjs.dev/) library and [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

- [Assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md)
- [Scoring](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/score.md)


## Development

1. Clone/download repo
2. Install dependencies `npm install`
2. Switch branch to `working-branch`

### Commands (scripts)

- `start` — run the application (backend and frontend)
- `start:dev` — run the application in development mode

### Environments (env)

- `WS_PORT` - web socket server port (default `8080`)
- `HTTP_PORT` - http server port (default `8181`)

The `.env` file in the root of the project is supported


## How to use

1. Run the application
2. Open `http://localhost:8181` (or any other port you specify)
3. Commands: 
    - You can send messages to the ws server with the help of the keyboard arrow buttons
    - You can press the `p` key to pass the cursor coordinates
    - You can get part of screen image with `LCtrl+p` keyboard buttons
    - You can draw circle (keyboard `c` button), square (keyboard `s` button) and rectangular (keyboard `r` button)


## Сontribution 

If you find a bug in the program, please create an issue in the repository and describe it in detail. 