import mongoose from "mongoose";
import env from './env.var.config'
import app from "../app";

const port = env.app.port

const connectDB = async () : Promise<void> => {
    try {
        await mongoose.connect(env.db.dbconnection!)
        .then((e) => {
            console.log(`[mongodb] Running On ${e.connection.host}`)
            app.listen(port, () => {
                console.log(`[server]: Server is running at http://localhost:${port}`);
            })
        })
        .catch((err) => console.log(err));
    } catch (error) {
        console.log(`[mongodb] Server Error: ${error}`);
    }
}

export default connectDB;