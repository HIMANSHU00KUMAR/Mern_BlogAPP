// server.js
import express  from 'express';
// import cors from 'cors';
import connectDB from './db.js';



const app = express();

// Connect to MongoDB database
connectDB();

// // Enable CORS middleware (adjust allowed origins if needed)
// app.use(cors()); // Allow requests from React app

// Parse incoming JSON data (for API requests)
app.use(express.json());

// // Define API routes (example with a user creation route)
// app.use('/api/users',userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
