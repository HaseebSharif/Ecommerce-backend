import express from "express";
import morgan from "morgan";
import cors from "cors";
import { dbConnection } from "./utils/features.js";


//importing Routes
import userRoutes from './routes/user.js'

const port = 4000;
const mongoURI =  "mongodb://localhost:27017";
// const stripeKey = process.env.STRIPE_KEY || "";

dbConnection();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req , res ) => {
  res.send("API Working with /api/v1");
});

//using routes
app.use("/api/v1/user" , userRoutes )

app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
  });