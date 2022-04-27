import { useEffect } from "react";

import io from "socket.io-client";

import { useDispatch } from "./Redux/redux-hooks";
import { getTickers } from "./Redux/tickers/tickersSlice";

import Layout from "./Components/Layout";
import Auction from "./Components/Auction";

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
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Auction />
      </Layout>
    </>
  );
}

export default App;
