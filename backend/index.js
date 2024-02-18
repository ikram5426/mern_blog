import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// MongoDB uri 
const mongo_uri = process.env.MONGO_URI

//Port
const port = process.env.PORT

// MongoDB connection
mongoose.connect(mongo_uri).then(() => { console.log(`data base connected successfully on port ${port}`); })

// Server configuration
app.listen(port, () => {
  console.log('Server started successfully');
})
