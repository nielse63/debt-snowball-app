import { LineChart } from "@mui/x-charts/LineChart";
import { CurveType } from "@mui/x-charts/models/seriesType/line";
import { format } from "date-fns";
import { useContext } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import parseChartData from "../../helpers/parseChartData";
import { AccountsContext } from "../../state/AccountsContext";

import "./styles.css";

function Chart() {
  const state = useContext(AccountsContext);
  const { results } = state;
  const chartData = parseChartData(results);
  const series = chartData.series.map((data) => {
    return {
      ...data,
      stack: "total",
      area: true,
      showMark: false,
      curve: "natural" as CurveType,
      // stackOrder: "appearance",
      valueFormatter: (value: number | null) => formatCurrency(value as number),
    };
  });
  console.log({ chartData, series });

  return (
    <section className="chart">
      <LineChart
        xAxis={[
          {
            id: "date",
            data: chartData.xAxisData,
            scaleType: "time",
            valueFormatter: (date) => format(date, "MMM yyyy"),
          },
        ]}
        yAxis={[
          {
            id: "balance",
            scaleType: "linear",
            valueFormatter: (value) =>
              formatCurrency(value as number, {
                maximumFractionDigits: 0,
              }),
          },
        ]}
        series={series}
        skipAnimation
        margin={{
          top: 20,
          bottom: 75,
          left: 50,
          right: 50,
        }}
        slotProps={{
          legend: {
            position: {
              vertical: "bottom",
              horizontal: "middle",
            },
          },
        }}
      />
    </section>
  );
}

export default Chart;
