import { RequestHandler } from "express";
import mongoose from "mongoose";

import BookingModel from "./booking.model";

export const bookTable: RequestHandler = async (req, res) => {
  const { name, email, phone, date, time, personNumber } = req.body;

  const booking = new BookingModel({
    name,
    email,
    phone,
    date,
    time,
    personNumber,
  });

  try {
    await booking.save();

    res.status(201).send({
      message: "Booking created successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error creating booking", error: error });
  }
};

export const cancelBooking: RequestHandler = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      res.status(404).send({ message: "Invalid" });
    }
    const booking = await BookingModel.findById(id);
    if (!booking) {
      res.status(404).send({ message: "Booking not found" });
    }
    booking!.status = "cancelled";
    await booking!.save();
    res.status(200).send({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).send({ message: "Booking error", error: error });
  }
};

