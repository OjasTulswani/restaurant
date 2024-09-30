import logo from "../../assets/logo.svg"
import BookTable from "../common/BookTable";


const Header = () => {

  
  return (
    <nav className="bg-white w-full  top-0 start-0 border-b border-gray-200 ">

      <div className="flex justify-between items-center h-16">
        <a
          href="/"
          className="ml-8"
        >
          <img
            src={logo}
            className="h-10 w-36"
            alt="Logo"
          />
          
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          <BookTable  />
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#menu"
                className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 "  
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 "
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
