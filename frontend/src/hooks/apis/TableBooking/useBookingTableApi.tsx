import {BookingType}  from '../../../types/Booking';
import {useHttpMethodContext} from '../../../context/HttpMethodProvider'
import { ApiResponseData } from "../../../types/api";

type Datatype = BookingType["booking"]


const useBookingTableApi = () => {
    const {post} = useHttpMethodContext();

    const createBooking = async (data : Datatype, showApiLoader = true) : Promise<ApiResponseData>=> {
        const response = await post('/booking', data, showApiLoader);
        
        return response;
    }

    

    return {createBooking};
}

export default useBookingTableApi
