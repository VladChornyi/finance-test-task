import "./App.css";
import io from "socket.io-client";
import Header from "./Components/Header";
import TickersList from "./Components/TickersList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTickers } from "./Redux/tickers/tickersSlice";

const socket = io("http://localhost:4000/");
socket.emit("start");

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("ticker", (quotes) => {
      dispatch(getTickers(quotes));
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <Header />
      <main>
        <TickersList />
      </main>
    </>
  );
}

export default App;
