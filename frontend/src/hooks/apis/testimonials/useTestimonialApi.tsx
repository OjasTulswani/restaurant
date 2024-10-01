import { useHttpMethodContext } from "../../../context/HttpMethodProvider"
// import { ApiResponseData } from "../../../types/api"

const useTestimonialApi = () => {
    const {get} = useHttpMethodContext();

    const getTestimonial = async (showApiLoader = true)  => {
        const response = await get('/testimonials/' , showApiLoader)

        return response;
    }

    return {getTestimonial}
}

export default useTestimonialApi;