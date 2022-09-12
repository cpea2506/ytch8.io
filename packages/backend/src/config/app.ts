import cors, { CorsOptions } from "cors";
import CORSWhitelist from "./cors";
import express, { Request, Response, Handler } from "express";
import morgan from "morgan";

const app = express();

morgan.format(
    "logger_format",
    '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
);

app.use(cors(CORSWhitelist as CorsOptions));
app.use(express.json());
app.use(morgan("logger_format") as Handler);
app.use(express.urlencoded({ extended: true }));

app.use("/", (_: Request, res: Response) =>
    res.status(400).send("Hello cai dmm luon"),
);

export default app;
