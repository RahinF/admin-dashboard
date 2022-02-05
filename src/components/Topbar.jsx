import { MenuOutlined, NotificationsNone, Settings } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useMinScreen } from "../hooks/minScreen";
import { toggle } from "../redux/hamburger.slice";
import DarkModeToggle from "./DarkModeToggle";
import IconButton from "./IconButton";

const Topbar = () => {
  const dispatch = useDispatch();
  const { min } = useMinScreen();

  return (
    <div className="h-12 flex items-center justify-between px-5 mb-10 dark:text-white">
      {!min`xl` && (
        <MenuOutlined
          onClick={() => dispatch(toggle())}
          className="cursor-pointer"
        />
      )}

      <div className="flex items-center gap-2 ml-auto">
        <span className="text-sm">Welcome, Rahin!</span>

        <div className="flex items-center gap-2">
          <IconButton>
            <div className="relative">
              <span className="flex">
                <NotificationsNone />
              </span>
              <span className="w-2 h-2 absolute -top-1 right-0 bg-purple-400 rounded-full"></span>
            </div>
          </IconButton>

          <IconButton>
            <DarkModeToggle />
          </IconButton>

          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
