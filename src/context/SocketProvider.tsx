"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => any;
  messages: string[];
  currentmsg: string;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`state is undefined`);

  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);
  const [currentmsg, setcurrentmsg] = useState<string>("{\"temp\":\"0\",\"r_x\":\"0\",\"r_y\":\"0\",\"r_z\":\"0\",\"a_x\":\"0\",\"a_y\":\"0\",\"a_z\":\"0\"}");

  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (msg) => {
      console.log("Send Message", msg);
      if (socket) {
        socket.emit("event:message", { message: msg });
      }
    },
    [socket]
  );

  const onMessageRec = useCallback((msg: string) => {
    console.log("From Server Msg Rec", msg);
    // const { message } = JSON.parse(msg) as { message: string };
    setcurrentmsg(msg);
    setMessages((prev) => [...prev, msg]);
  }, []);

  useEffect(() => {
    const _socket = io("https://fitting-ladybird-sharing.ngrok-free.app/",{ transports : ['websocket'],
        extraHeaders: {
        // "ngrok-skip-browser-warning": "69420",
      }});
    _socket.on("message", onMessageRec);

    setSocket(_socket);

    return () => {
      _socket.off("message", onMessageRec);
      _socket.disconnect();
      setSocket(undefined);
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage, messages, currentmsg }}>
      {children}
    </SocketContext.Provider>
  );
};