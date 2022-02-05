import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar";
import AllRoutes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-purple-50 dark:bg-gray-600">
      <Router>
        <div className="flex max-w-screen-2xl">
          <Sidebar />

          <div className="w-full">
            <Topbar />
            <AllRoutes />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
