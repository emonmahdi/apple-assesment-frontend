import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap  p-6 w-[100%]">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow text-center">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              <img src={logo} width="auto" alt="" />
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Store
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Mac
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              iPad
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              iPhone
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Watch
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              Vision
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              TV & Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Entertainment
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Accessories
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-6"
            >
              Support
            </a>
            <a
              href="#responsive-header"
              className="block mt-6 lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              <IoSearchOutline />
            </a>
            <a
              href="#responsive-header"
              className="block mt-6 lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              <PiBagSimple />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
