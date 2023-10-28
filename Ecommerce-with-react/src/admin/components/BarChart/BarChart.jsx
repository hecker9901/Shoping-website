
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],

  ["2018", 1030, 540, 350],
  ["2019", 1000, 520, 280],
  ["2020", 900, 500, 200],
  ["2021", 1100, 600, 450],
  ["2022", 1200, 650, 400],
  ["2023", 1000, 450, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2018-2023",
  },
  colors: ["rgb(81, 190, 255)", "rgb(255, 105, 138)", "#f39f2a"],
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="280px"
      data={data}
      options={options}
    />
  );
}
