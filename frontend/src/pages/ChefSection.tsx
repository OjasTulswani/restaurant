import { SecondaryButton } from "../components/common/Button";
import BookTable from "../components/common/BookTable";
import chef from "../assets/chef.svg";
const ChefSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Expects Chef
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside marker:text-orange-600 text-gray-600">
            {[...Array(6)].map((_, index) => (
              <li key={index}>Lorem ipsum dolor sit amet, consectetur</li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-center md:items-start lg:items-start mt-8">
            <SecondaryButton title="Menu" />
            <BookTable />
          </div>
        </div>

        
        <div className="lg:w-1/2 lg:ml-16 mt-10 lg:mt-0 relative">
          <img
            src={chef}
            alt="Chef"
            className="relative rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
