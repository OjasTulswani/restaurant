import axios from "../baseUrl/url"
// import BookingInputType from "../../context/tableBookingContextProvider"

interface BookingInputType {
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    personNumber: number;
    status: string;
}

export async function createBooking(booking : BookingInputType) {
    return axios.post('/booking', booking)
}

export async function cancelBooking(bookingId : string) {
    return axios.delete(`/booking/${bookingId}/cancel`)
}
