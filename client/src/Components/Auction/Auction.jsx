import { Wrapper } from "./Auction.styled";
import "antd/dist/antd.css";

import { Table } from "antd";
import Moment from "react-moment";

import { getCurrentTickers, getPastTickers } from "../../Redux/selectors";

import Chart from "../Chart";
import { columns } from "./columns";
import { useSelector } from "../../Redux/redux-hooks";

const Auction = () => {
  const currentTrade = useSelector(getCurrentTickers);
  const pastTrade = useSelector(getPastTickers);

  const data = currentTrade.map(
    ({
      ticker,
      exchange,
      price,
      change,
      change_percent,
      dividend,
      last_trade_time,
    }) => ({
      key: ticker,
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
    <Wrapper>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered={true}
        size={"small"}
        rowClassName={(item, index) =>
          pastTrade.length && item.price - pastTrade[index].price > 0
            ? "green"
            : "red"
        }
      />
      <Chart tickers={currentTrade} />
    </Wrapper>
  );
};

export default Auction;
