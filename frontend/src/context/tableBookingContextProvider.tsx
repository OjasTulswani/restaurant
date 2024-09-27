import { createContext, ReactElement, useState } from "react";
import * as endpoints from "../apis/tableBooking/booking.api"

export interface BookingType {
    _id: string;
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    personNumber: number;
    status: string;
}

export interface BookingInputType {
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    personNumber: number;
    status: string;
}

const initState: BookingType[] = [];

export type UseBookingContextType = {
    bookings: BookingInputType[];
    createBooking: (booking: BookingInputType) => void;
    deleteBooking: (bookingId: string) => void;
}

const initContextState: UseBookingContextType = { bookings: [], createBooking: () => { }, deleteBooking: () => { } }

export const BookingContext = createContext<UseBookingContextType>(initContextState);

type ChildrenType = { children: React.ReactNode }

export const BookingProvider = ({ children }: ChildrenType): ReactElement => {
    const [bookings, setBookings] = useState<BookingType[]>(initState)

    const createBooking = async (booking: BookingInputType) => {
        try {
            const response = await endpoints.createBooking(booking);
            setBookings([...bookings, response.data]);
            
        } catch (err) {
            console.log(err);
        }
    }

    const deleteBooking = async (bookingId: string) => {
        try {
            await endpoints.cancelBooking(bookingId);
            setBookings(bookings.filter((booking) => booking._id !== bookingId));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <BookingContext.Provider value={{ bookings, createBooking, deleteBooking }}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContext