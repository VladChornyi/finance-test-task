import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { colors, options } from "./options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Chart = ({ tickers }) => {
  const data = {
    labels: ["Current quotes"],
    datasets: tickers.map(({ price, ticker }, index) => ({
      label: ticker,
      data: [Number(price)],
      backgroundColor: colors[index % 6],
    })),
  };

  return (
    <>
      <Bar options={options} data={data} width={500} height={300} />
    </>
  );
};

export default Chart;
