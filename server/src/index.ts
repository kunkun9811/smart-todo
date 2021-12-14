import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { BACKEND_URL } from "./config/database";

// routes imports
import userRouter from "./routes/userRoutes";
import sectionRouter from "./routes/sectionRoutes";
import todoRouter from "./routes/todoRoutes";

// instantiate express application
const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// KEY: json pretty print options
app.set("json spaces", 2);

// routes
app.use("/users", userRouter);
app.use("/sections", sectionRouter);
app.use("/todos", todoRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Server Working</h1>");
});

// port number
const PORT = process.env.PORT || 5500;

// connect to mongoDB and start server after successful conenction with mongoDB
mongoose
  .connect(BACKEND_URL)
  .then(() => app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`)))
  .catch((err: string) => console.log(`Unsuccessful connection with MongoDB => ${err}`));
