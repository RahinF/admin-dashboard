import Chart from "../components/Chart";
import Featured from "../components/Featured";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { chartData } from "../dummyData";

const Home = () => {
  return (
    <div className="w-full">
      <Featured />
      <div className="p-5 m-5 shadow-lg rounded-lg bg-white dark:bg-gray-700">
        <Chart title="User Analytics" data={chartData} dataKey="Active User" grid />
      </div>

      <div className="flex flex-col lg:flex-row m-5 gap-3">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
