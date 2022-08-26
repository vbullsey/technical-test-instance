import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#6366F1", "#1E293B"],
      borderColor: ["#000", "#000"],
      borderWidth: 1,
    },
  ],
};

type PieChartProps = {
  dataPie?:
    | {
        labels: [string];
        datasets: [
          {
            label: string;
            data: [number];
            backgroundColor: [string];
            borderColor: [string];
            borderWidth: number;
          }
        ];
      }
    | any;
};

const PieChart: React.FC<PieChartProps> = ({ dataPie }) => {
  return <Pie data={dataPie || data} />;
};

export default PieChart;
