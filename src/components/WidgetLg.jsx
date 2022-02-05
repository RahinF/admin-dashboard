import { widgetLgData } from "../dummyData";
import Button from "./Button";

const WidgetLg = () => {
  const tableHeadings = ["Customer", "Date", "Amount", "Status"];

  return (
    <div className="p-5 shadow-lg rounded-lg basis-4/6 bg-white dark:bg-gray-700 dark:text-white">
      <h3 className="text-lg mb-3 font-bold">Latest transactions</h3>
      <table className="w-full">
        <thead>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index} className="text-left">
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {widgetLgData.map(({ avatar, name, date, amount, status }) => (
            <tr key={name}>
              <td className="flex items-center gap-2">
                <img
                  src={avatar}
                  alt={`${name}'s avatar`}
                  className="h-10 w-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <span>{name}</span>
              </td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>
                <Button status={status}>{status}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
