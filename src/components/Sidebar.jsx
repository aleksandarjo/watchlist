import logo from "../assets/logo.svg";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-semi-dark px-5 py-6 lg:mx-4 lg:mt-4 lg:min-h-[75%] lg:flex-col lg:gap-10 lg:rounded-lg  lg:px-0 lg:py-10 ">
        <nav className="flex w-full flex-row items-center lg:flex-col lg:gap-16">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <ul className="flex w-full flex-row items-center justify-center gap-6 lg:flex-col">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className={`flex items-center justify-center  ${item.size} ${
                    item.url === location.pathname
                      ? "text-white"
                      : "text-blue-greyish"
                  } transition-colors hover:text-red`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>user</div>
      </div>
    </header>
  );
};

export default Sidebar;
