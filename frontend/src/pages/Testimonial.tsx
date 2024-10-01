import customer from "../assets/customer.svg"
import TestimonialList from "../components/layouts/TestimonialList"

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
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <div className="ml-36">
            <div className="">

          <TestimonialList />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
