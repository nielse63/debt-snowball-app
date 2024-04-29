// import { LineChart } from "@mui/x-charts/LineChart";
// import { CurveType } from "@mui/x-charts/models/seriesType/line";
// import { format } from "date-fns";
import { useContext, useRef } from "react";
// import formatCurrency from "../../helpers/formatCurrency";
// import parseChartData from "../../helpers/parseChartData";
import { Line } from "@ant-design/plots";
import { addMonths, getMonth } from "date-fns";
import { AccountsContext } from "../../state/AccountsContext";
console.log(Line);

// import "./styles.css";

type ChartData = {
  //   [key: string]: string | Date | number;
  date: Date;
  title: string;
  value: number;
};

const addMonthsAndFormat = (months: number) => {
  const d = new Date();
  const month = getMonth(d);
  return addMonths(new Date(d.getFullYear(), month, 1), months);
};

const parseChartData = (acc: ChartData[], object: ResultsObject, i: number) => {
  //   const output: ChartData = {
  //     date: addMonths(new Date(), i + 1),
  //   };
  const date = addMonthsAndFormat(i + 1);
  object.accounts.forEach((account) => {
    const output: ChartData = {
      date,
      title: account.name,
      value: account.balanceEnd,
    };
    acc.push(output);
  });
};

function Chart() {
  const width = useRef(1016);
  const { results } = useContext(AccountsContext);
  const firstDate = addMonthsAndFormat(0);
  //   console.log({ firstDate, month });
  //   const firstObject: ChartData = {
  //     date: addMonths(new Date(), 0),
  //   };
  const chartData: ChartData[] = [];
  results[0].accounts.forEach((account) => {
    const object: ChartData = {
      date: firstDate,
      title: account.name,
      value: account.balanceStart,
    };
    chartData.push(object);
  });
  results.forEach((object, i) => {
    parseChartData(chartData, object, i);
  });
  console.log({ results, chartData });
  //   const { results } = state;
  //   const chartData = parseChartData(results);
  //   const series = chartData.series.map((data) => {
  //     return {
  //       ...data,
  //       stack: "total",
  //       area: true,
  //       showMark: false,
  //       curve: "natural" as CurveType,
  //       // stackOrder: "appearance",
  //       valueFormatter: (value: number | null) => formatCurrency(value as number),
  //     };
  //   });
  //   const data = [
  //     { year: "1991", value: 3 },
  //     { year: "1992", value: 4 },
  //     { year: "1993", value: 3.5 },
  //     { year: "1994", value: 5 },
  //     { year: "1995", value: 4.9 },
  //     { year: "1996", value: 6 },
  //     { year: "1997", value: 7 },
  //     { year: "1998", value: 9 },
  //     { year: "1999", value: 13 },
  //   ];
  const config = {
    data: chartData,
    // data: {
    //   value: chartData,
    //   transform: [
    //     {
    //       type: "fold",
    //       fields: ["Visa", "Student Loan"],
    //       key: "type",
    //       value: "value",
    //     },
    //   ],
    // },
    xField: "date",
    // yField: ["Visa", "Student Loan"],
    yField: "value",
    colorField: "title",
    point: {
      //   shapeField: "square",
      sizeField: 2,
    },
    scale: {
      //   y: {
      //     type: "point",
      //   },
      x: {
        type: "time",
      },
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 4,
    },
    width: width.current,
    height: 350,
  };

  return (
    <section className="chart mt-4">
      <Line
        {...config}
        style={{ maxWidth: "100%" }}
        onReady={(chart) => {
          width.current = chart.container.clientWidth;
        }}
      />
      ;
    </section>
  );
}

export default Chart;
