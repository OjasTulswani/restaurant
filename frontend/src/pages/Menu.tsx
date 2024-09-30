import { ImageProvider } from "../context/imageContextProvider";
import MenuSlider from "../components/common/MenuSlider";
import menu from "../assets/menu.svg"
import { SecondaryButton } from "../components/common/Button";
import BookTable from "../components/common/BookTable";
const Menu = () => {
  return (
    <>
      <div id="menu" className="mx-auto container p-4 md:p-8 lg:p-12 ">
        <div className="flex flex-col ">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-4">
              Our Special Dishes
            </h2>
            <p className="font-thin text-gray-400 text-xs pb-10">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <ImageProvider>
            <MenuSlider />
          </ImageProvider>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-20">
        <div className="relative">
          <img
            src={menu}
            alt="Image"
            className="rounded-lg transform w-full md:w-3/4 lg:w-3/4 mt-5"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start lg:items-start ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-4">
            Welcome to our Restaurant
          </h1>
          <p className="text-gray-600 font-sans mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-center md:items-start lg:items-start">
            <SecondaryButton title="Menu"/>
            <BookTable />
          </div>
          
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Menu;
