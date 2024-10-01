import customer from "../assets/customer.svg";
import TestimonialList from "../components/layouts/TestimonialList";
import restaurant from "../assets/restaurant.svg";
const Testimonial = () => {
  return (
    <>
      <div className="relative bg-gray-100">
        <img src={customer} alt="Customer" />
        <div className="absolute top-0 left-0 w-full h-full p-8">
          <div className="mx-auto container p-4 md:p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans mb-4 text-center">
              Our Happy Customers
            </h2>
            <p className="font-thin text-gray-400 text-xs pb-10 text-center">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="ml-36">
              <div className="">
                <TestimonialList />
              </div>
            </div>
            <div className="p-28"></div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="object-cover"
                  src={restaurant}
                  alt="Restaurant background"
                />
              </div>
              <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center w">
                    Get Or Promo Code by <br />
                    Subscribing To our Newsletter
                  </h2>
                  <div className="mt-10">
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:max-w-xl sm:mx-auto"
                      placeholder="Enter your email"
                    />
                    <button className="mt-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
