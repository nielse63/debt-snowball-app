import { addMonths, format, getMonth } from "date-fns";
import Highcharts, {
  SeriesOptionsType,
  TooltipFormatterContextObject,
} from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext, useRef } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import uuid from "../../helpers/uuid";
import { AccountsContext } from "../../state/AccountsContext";

import "./styles.css";

type SeriesEntry = [number, number | null];

type SeriesObject = {
  [key: string]: SeriesEntry[];
};

type IdsObject = {
  [key: string]: string;
};

const SERIES_COLORS = [
  "#2caffe",
  "#544fc5",
  "#00e272",
  "#fe6a35",
  "#6b8abc",
  "#d568fb",
  "#2ee0ca",
  "#fa4b42",
  "#feb56a",
  "#91e8e1",
];

const addMonthsAndFormat = (months: number): number => {
  const d = new Date();
  const month = getMonth(d);
  const date = addMonths(new Date(d.getFullYear(), month, 1), months);
  return date.getTime();
};

const createSeriesArray = (results: ResultsObject[]): SeriesOptionsType[] => {
  const seriesObject: SeriesObject = {};
  const firstDate = addMonthsAndFormat(0);
  const { accounts } = results[0];
  const ids: IdsObject = accounts.reduce((acc, account) => {
    return {
      ...acc,
      [uuid()]: account.name,
    };
  }, {});
  results.forEach((object, i) => {
    if (!i) {
      object.accounts.forEach((account, j) => {
        const id = Object.keys(ids)[j];
        seriesObject[id] = [[firstDate, account.balanceStart]];
      });
    }
    const date = addMonthsAndFormat(i + 1);
    object.accounts.forEach((account, j) => {
      const id = Object.keys(ids)[j];
      seriesObject[id].push([date, account.balanceEnd]);
    });
  });
  const series: SeriesOptionsType[] = Object.entries(seriesObject).map(
    ([key, value]) => {
      const name = ids[key];
      return {
        name,
        data: value,
        type: "areaspline",
        id: key,
      };
    }
  );
  return series;
};

const createChartOptions = (
  series: SeriesOptionsType[]
): Highcharts.Options => {
  const colors = series.map((s, i) => {
    return SERIES_COLORS[i % SERIES_COLORS.length];
  });
  const options: Highcharts.Options = {
    chart: {
      type: "areaspline",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    credits: { enabled: false },
    xAxis: {
      type: "datetime",
      crosshair: true,
    },
    yAxis: {
      title: {
        useHTML: true,
        text: "Balance",
      },
      labels: {
        formatter(point) {
          return formatCurrency(point.value as number);
        },
      },
    },
    tooltip: {
      shared: true,
      useHTML: true,
      formatter() {
        const self: TooltipFormatterContextObject = this;
        const output = (self.points ?? []).reduce((s, point) => {
          const value = formatCurrency(point.y as number);
          return `${s}<span class="tooltip-item"><span class="tooltip-color" style="background-color: ${point.color};"></span><span><b>${point.series.name}:</b></span> <span>${value}</span></span>`;
        }, `<b class="tooltip-title">${format(new Date(self.x as number), "MMM yyyy")}</b>`);
        return `<div class="chart-tooltip">${output}</div>`;
      },
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        marker: {
          enabled: false,
        },
        stacking: "normal",
      },
    },
    series,
    colors,
    accessibility: {
      description: "This chart shows the balance of accounts over time.",
    },
  };
  return options;
};

function Chart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const { results } = useContext(AccountsContext);
  const series = createSeriesArray(results);
  const options = createChartOptions(series);

  return (
    <section className="chart mt-4">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </section>
  );
}

export default Chart;
