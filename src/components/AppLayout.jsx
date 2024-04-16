import { Outlet } from "react-router-dom";

import Search from "./Search";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_2rem_1fr] lg:grid-cols-[6rem_1fr] lg:grid-rows-1">
      <Sidebar />
      <main className="grid lg:grid-rows-[8.5rem_1fr]">
        <Search />
        <div className="bg-red">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
