import { useEffect, useState } from "react";
import useTestimonialApi from "../../hooks/apis/testimonials/useTestimonialApi";


interface TestimonialType {
  name: string;
  feedback: string;
}

const TestimonialList = () => {
  const { getTestimonial } = useTestimonialApi();

  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

  useEffect(() => {
    const fetchTestimonial = async () => {
      const response = await getTestimonial(true);
      setTestimonials(response.response as TestimonialType[]);
    };
    fetchTestimonial();
  }, []);
  return (
    <div>
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hidden gap-8 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded text-gray-600 bg-slate-50 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-50 font-medium text-xs rounded-tl-2xl rounded-br-2xl  px-5 py-2.5 text-center me-2 mb-2 h-34 w-56 ">
            <h3 className="font-extrabold text-lg">{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
