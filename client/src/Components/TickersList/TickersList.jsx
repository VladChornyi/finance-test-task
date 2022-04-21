import { useSelector } from "react-redux";

import { Table } from "antd";
import Moment from "react-moment";

import { getCurrentTickers, getLastTickers } from "../../Redux/selectors";

const columns = [
  {
    title: "Ticker",
    dataIndex: "ticker",
    align: "center",
    width: 100,
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    align: "center",
    width: 100,
  },
  {
    title: "Price",
    dataIndex: "price",
    align: "center",
    width: 100,
  },
  {
    title: "Change",
    dataIndex: "change",
    align: "center",
    width: 100,
  },
  {
    title: "Percent",
    dataIndex: "change_percent",
    align: "center",
    width: 100,
  },
  {
    title: "Dividend",
    dataIndex: "dividend",
    align: "center",
    width: 100,
  },
  {
    title: "Last trade",
    dataIndex: "last_trade_time",
    align: "center",
    width: 200,
  },
];

const TickersList = () => {
  const tickers = useSelector(getCurrentTickers);
  const lastTrade = useSelector(getLastTickers);
  console.log(lastTrade[0]);
  const data = tickers.map(
    ({
      ticker,
      exchange,
      price,
      change,
      change_percent,
      dividend,
      last_trade_time,
    }) => ({
      ticker,
      exchange,
      price,
      change,
      change_percent,
      dividend,
      last_trade_time: (
        <Moment className="trade-time" format="YYYY.MM.DD hh:mm:ss">
          {last_trade_time}
        </Moment>
      ),
    })
  );

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowClassName={(item, index) =>
          lastTrade.length && item.price - lastTrade[index].price > 0
            ? "red"
            : "green"
        }
      />
    </>
  );
};

export default TickersList;
