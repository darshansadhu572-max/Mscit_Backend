import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://darshansadhu572_db_user:5aiMHkUmjCqnftqm@ac-lx7gntp-shard-00-00.zaqozpz.mongodb.net:27017,ac-lx7gntp-shard-00-01.zaqozpz.mongodb.net:27017,ac-lx7gntp-shard-00-02.zaqozpz.mongodb.net:27017/?ssl=true&replicaSet=atlas-tugs5d-shard-0&authSource=admin&appName=Cluster0")
        console.log(`connectd successfully ${con.connection.host}`)
    }catch(error) {
        console.log(`connection error: ${error}`)
    }
}

export default connectDB;