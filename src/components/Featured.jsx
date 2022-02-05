import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { featuredData } from "../dummyData";

const Featured = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-between m-5">
      {featuredData.map((data) => (
        <div
          key={data.title}
          className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-700"
        >
          <div className="w-fit m-auto flex items-center dark:text-white gap-2">
            <div className="bg-purple-200 dark:bg-gray-800 rounded-full p-4">
              <data.icon fontSize="large" />
            </div>

            <div>
              <span className="text-md text-neutral-500 dark:text-white">
                {data.title}
              </span>

              <div className="flex items-center">
                <span className="text-3xl font-semibold">{data.value}</span>
                <span className="flex items-center ml-5">
                  {data.rate}
                  {data.rate >= 0 ? (
                    <ArrowUpward className="text-green-400" />
                  ) : (
                    <ArrowDownward className="text-red-400" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
