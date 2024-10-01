import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <img src={logo} alt="logo" />
              <p className="font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ex, quam in ipsum consequuntur autem facere, est
                dolor explicabo aut.{" "}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider items-center">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Main dishes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Dishes
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Fish & Viggies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Tofu Chili
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Egg & Cocumber
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-900 hover:text-gray-700"
                  >
                    Chicken & Rice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
