// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { LineChart } from "@mui/x-charts/LineChart";

import "./styles.css";

// const chartOptions = {
//   title: {
//     text: "",
//   },
//   series: [
//     {
//       data: [1, 2, 3],
//     },
//     {
//       data: [2, 3, 1],
//     },
//     {
//       data: [3, 2, 1],
//     },
//   ],
//   credits: {
//     enabled: false,
//   },
//   yAxis: {
//     title: {
//       text: "Total Balance",
//     },
//   },
// };

function Chart() {
  // const styles = useStyles();
  return (
    <section className="chart">
      {/* <HighchartsReact highcharts={Highcharts} options={chartOptions} /> */}
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        // width={500}
        // height={300}
      />
    </section>
  );
}

export default Chart;
