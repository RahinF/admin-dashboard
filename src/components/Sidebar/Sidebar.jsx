import { Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMinScreen } from "../../hooks/minScreen";
import { useSelector, useDispatch } from "react-redux";
import { getIsOpen } from "../../redux/hamburger.selector";
import { toggle } from "../../redux/hamburger.slice";
import { menu } from "./data";

const Sidebar = () => {
  const { min } = useMinScreen();
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsOpen);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(toggle());
  };

  const sidebar = (
    <div className="w-60 shrink-0 bg-white dark:bg-gray-700 min-h-screen shadow-lg">
      <div className="mt-6 text-center font-bold text-3xl text-slate-900 dark:text-white cursor-pointer">
        Admin
      </div>
      <div className="p-5 text-neutral-600 sticky top-0">
        {menu.map(({ title, items }) => (
          <div key={title} className="mb-2">
            <span className="m-0 text-neutral-500 dark:text-white text-sm">
              {title}
            </span>
            <ul className="mt-0 p-1">
              {items.map((item) => (
                <li key={item.heading} onClick={toggleDrawer(false)}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive && `bg-purple-100 dark:bg-gray-800`
                      }  no-underline flex items-center gap-3 p-1 rounded-lg cursor-pointer hover:bg-purple-200 dark:hover:bg-gray-900 dark:text-white`
                    }
                  >
                    <item.icon />
                    <span className="text-sm font-medium">{item.heading}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const hamburger = (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      {sidebar}
    </Drawer>
  );

  return min`xl` ? sidebar : hamburger;
};

export default Sidebar;
