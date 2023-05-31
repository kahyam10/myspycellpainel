import socketio from "socket.io-client";
// const socket = socketio("http://localhost:3333", {
const socket = socketio("http://45.178.182.24:3333/", {
  autoConnect: false,
});

function LinkSocketFunctions(AddNotification: (item: IUpdate) => void) {
  socket.on("message", (item: any) => {
    console.log(item);
  });
  socket.on("notification", (item: any) => {
    console.log(item);
    AddNotification({ type: item, date_time: new Date().getTime() });
  });
}

function ConnectServer(login: ILogin) {
  socket.io.opts.query = login;
  socket.connect();
}

function DisconnectServer() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { ConnectServer, DisconnectServer, LinkSocketFunctions };
