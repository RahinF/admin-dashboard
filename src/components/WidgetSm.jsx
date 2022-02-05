import { Visibility } from "@mui/icons-material";
import { newUsers } from "../dummyData";
import Button from "./Button";

const WidgetSm = () => {
  return (
    <div className="p-5 shadow-lg rounded-lg basis-2/6 bg-white dark:bg-gray-700 dark:text-white">
      <h3 className="text-lg mb-3 font-bold">New Members</h3>
      <ul className="flex flex-col gap-3">
        {newUsers.map(({ name, occupation, avatar }) => (
          <li key={name} className="flex justify-between items-center">
            <div className="flex gap-2">
              <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="h-10 w-10 rounded-full object-cover"
                width={40}
                height={40}
              />

              <div>
                <p className="m-0 font-semibold">{name}</p>
                <p className="m-0 text-sm text-neutral-500 dark:text-white">{occupation}</p>
              </div>
            </div>
            <Button>
              <span className="flex gap-2">
                <Visibility />
                <span>Display</span>
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
