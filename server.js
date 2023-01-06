import express from "express";
import dotenv from 'dotenv';
import corsOptions from "./config/corsOptions.js";
dotenv.config();
import cors from 'cors'
import mongoose from 'mongoose';
import root from './router/root.js';
import catBreed from './router/catName.js';
import catImage from './router/catImage.js';
import connectDB from "./config/dbConnection.js";
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', root)
app.use('/breeds', catBreed)
app.use('/image', catImage)


mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DataBase')
  app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`)
  })
})
