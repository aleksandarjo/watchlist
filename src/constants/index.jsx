import { SiWindows11 } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";

export const navigation = [
  {
    id: 1,
    icon: <SiWindows11 />,
    url: "/",
    size: "text-[1.25rem]",
  },
  {
    id: 2,
    icon: <MdLocalMovies />,
    url: "/movies",
    size: "text-[1.75rem]",
  },
  {
    id: 3,
    icon: <PiTelevisionDuotone />,
    url: "/series",
    size: "text-[1.75rem]",
  },
  {
    id: 4,
    icon: <FaBookmark />,
    url: "/wishlist",
    size: "text-[1.25rem]",
  },
];
