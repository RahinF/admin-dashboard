import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="overflow-hidden">
      <h3 className="text-lg mb-3 font-bold dark:text-white">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
          {grid && <CartesianGrid stroke="#d3d3d3" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
