import express, { Express } from "express";
import morgan from "morgan"
import cors from "cors"
import {bookingRouter, testimonialRouter} from './apis'

const app : Express = express()

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

//Routes

app.use("/api/booking", bookingRouter);
app.use("/api/testimonials", testimonialRouter);

export default app;