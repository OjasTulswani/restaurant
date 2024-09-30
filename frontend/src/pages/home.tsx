import homeImg from "../assets/home.svg";
import { SecondaryButton } from "../components/common/Button";
import BookTable from "../components/common/BookTable";

const home = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
        <div className="flex flex-col justify-center items-center md:items-start lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-4">
            We provide the best food for you
          </h1>
          <p className="text-gray-600 font-sans mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-center md:items-start lg:items-start">
            <SecondaryButton title="Menu" />
            <BookTable />
          </div>
          <div className="flex gap-6 mt-8 justify-center md:justify-start lg:justify-start">
            <a href="#">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={homeImg}
            alt="Image"
            className="rounded-lg transform w-full md:w-3/4 lg:w-3/4 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
