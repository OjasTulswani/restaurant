import mongoose, {Model, Schema} from "mongoose";

interface Booking {
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    personNumber: number;
}

const bookingSchema = new  Schema<Booking>({
    name : {
        type: String,
        required: true,

    },
    email : {
        type: String,
        required: true,
    },
    phone : {
        type: String,
        required: true,
    },
    date : {
        type : Date,
        required: true,
    },
    time : {
        type: String,
        required: true,
    },
    personNumber : {
        type : Number,
        required: true,
    }
})

const BookingModel :  Model<Booking> = mongoose.model('Booking', bookingSchema);

export default BookingModel