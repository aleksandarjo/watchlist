import { Outlet } from "react-router-dom";

import Search from "./Search";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-cols-[6rem_1fr]">
      <Sidebar />
      <div className="grid grid-rows-[2rem_1fr]">
        <div className="bg-blue-600">
          <Search />
        </div>
        <div className="bg-red">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
