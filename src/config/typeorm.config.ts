import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { Movie } from '../entities/Movie'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'movies_db',
    synchronize: false,
    logging: true,
    entities: [Movie],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})