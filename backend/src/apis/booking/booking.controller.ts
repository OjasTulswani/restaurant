import { RequestHandler } from "express";

import BookingModel from "./booking.model";

export const bookTable : RequestHandler = async (req, res, next) => {

    const { name, email, phone, date, time, personNumber } = req.body;

    const booking = new BookingModel({ name, email, phone, date, time, personNumber}); 

    try {
        await booking.save();

        res.status(201).send({ 

            message : "Booking created successfully" 

        })    
    } catch (error) {

        res.status(500).send({ message : "Error creating booking", error: error})

    }

    next();
};