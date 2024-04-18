import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineAddChart } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const base = "text-md text-white";
const icons = [
  {
    id: 1,
    icon: <FaRegBookmark className={`${base}`} />,
    action: "",
  },
  {
    id: 2,
    icon: <MdOutlineAddChart className={`${base}`} />,
    action: "",
  },
  {
    id: 3,
    icon: <FaInfoCircle className={`${base}`} />,
    action: "",
  },
];

const MovieActions = () => {
  return (
    <div className="absolute right-2 top-2 z-30 flex flex-col gap-2 ">
      {icons.map((item) => (
        <button key={item.id} className="rounded-full bg-semi-dark/50 p-2">
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default MovieActions;
