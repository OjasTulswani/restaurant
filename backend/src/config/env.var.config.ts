import dotenv from 'dotenv'

dotenv.config()

export default {
    app : {
        port : Number(process.env.APP_PORT) || 8080
    }, 
    db : {
        dbconnection : (process.env.MONGO_CONNECTION_STRING)
    }
}