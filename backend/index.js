import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import authRoute from "./routes/auth.js"


dotenv.config()

const app = express()

// MongoDB uri 
const mongo_uri = process.env.MONGO_URI

//Port
const port = process.env.PORT

// MongoDB connection
mongoose.connect(mongo_uri).then(() => { console.log(`data base connected successfully on port ${port}`); })

app.use(express.json())

// Server configuration
app.listen(port, () => {
  console.log('Server started successfully');
})

app.use('/api/user', userRoute)
app.use('/api/auth',authRoute)