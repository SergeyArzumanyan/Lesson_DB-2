import "reflect-metadata"
import { DataSource } from "typeorm"

import { Actor } from "./entities/Actor"
import { Genre } from "./entities/Genre"
import { Movie } from "./entities/Movie"
import { Rating } from "./entities/Rating"
import { Director } from "./entities/Director"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "movies_db",
    synchronize: false,
    logging: true,
    entities: [Director, Actor, Genre, Movie, Rating],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})