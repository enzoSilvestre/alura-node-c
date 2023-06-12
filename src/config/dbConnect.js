import mongoose from "mongoose";

mongoose.connect("mongodb+srv://aluraUser:123@aluracluster.mmo2p.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;