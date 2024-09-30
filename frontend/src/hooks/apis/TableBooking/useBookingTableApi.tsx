
import {useHttpMethodContext} from '../../../context/HttpMethodProvider'
import { ApiResponseData } from "../../../types/api";

const useBookingTableApi = () => {
    const {post} = useHttpMethodContext();

    const createBooking = async (data : object, showApiLoader = true) : Promise<ApiResponseData>=> {
        const response = await post('/booking', data, showApiLoader);
        return response;
    }

    return {createBooking};
}

export default useBookingTableApi
