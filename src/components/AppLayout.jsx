import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-cols-[6rem_1fr]">
      <Sidebar />
      <div className="grid grid-rows-[2rem_1fr]">
        <div className="bg-blue-600">header</div>
        <div className="bg-red">main</div>
      </div>
    </div>
  );
};

export default AppLayout;
