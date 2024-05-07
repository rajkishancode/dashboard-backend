// app.ts 
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 

export const MONGO_URL = process.env.MONGO_URL;  // Retrieve the environment variable 
