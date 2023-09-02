import { io } from "socket.io-client";

import React from "react";
export const socket = io(
	process.env.REACT_APP_API_URL ||
		"https://glance-app-kc-04f6c24643df.herokuapp.com/"
);
socket.on("connect", () => {
	console.log("connected to server");
});
export const SocketContext = React.createContext();
