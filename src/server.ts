import "reflect-metadata";
import express from 'express';

import { AppDataSource } from "./config/typeorm.config";
import { movieRouter } from "./controllers/movie.controller";

const app = express();

app.use(express.json());

app.use('/api/movies', movieRouter);

const PORT = process.env.PORT || 3000;

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${ PORT }`);
        });
    }).catch(error => console.log(error));