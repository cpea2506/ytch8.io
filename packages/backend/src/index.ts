import express from "express";
import app from "./config/app";
import { PORT } from "@/config/env";
import { createServer, Server } from "http";

const http: Server = createServer(app);

app.use(express.json());

http.on("error", (error) => {
    if (error) {
        throw error;
    }
});

http.listen(PORT || 5001, () =>
    console.log(` 🚀 Server ready at: http://localhost:${PORT || 5001}`),
);
