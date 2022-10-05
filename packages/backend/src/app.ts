import cors, { CorsOptions } from "cors";
import CORSWhitelist from "./config/cors";
import express, { Request, Response, Application } from "express";
import userRouter from "./user/router";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app: Application = express();

morgan.format(
    "logger_format",
    '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
);

app.use(cors(CORSWhitelist as CorsOptions));
app.use(express.json());
app.use(morgan("logger_format"));
app.use(express.urlencoded({ extended: true }));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* -------------
   Main route
------------- */

app.use("/api/v1/user", userRouter);
app.use("/", (_: Request, res: Response) =>
    res.status(400).send("Great you have found an empty treasure box!"),
);

export default app;
