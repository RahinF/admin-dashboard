import { DarkMode, LightMode } from "@mui/icons-material";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div onClick={() => setTheme(colorTheme)} className="cursor-pointer">
      {colorTheme === "light" ? <LightMode/> : <DarkMode/>}
    </div>
  );
};

export default DarkModeToggle;
