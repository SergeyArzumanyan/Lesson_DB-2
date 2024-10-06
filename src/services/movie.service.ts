import { Request, Response } from "express";

import { AppDataSource } from "../config/typeorm.config";
import { Movie } from "../entities/Movie";
import { HttpStatus } from "../utils/enums/http-statuses.enum";

const movieRepository = AppDataSource.getRepository(Movie);

export const createMovie = async (req: Request, res: Response) => {
    try {
        const movie = movieRepository.create(req.body);
        await movieRepository.save(movie);
        res.status(HttpStatus.CREATED).json(movie);
    } catch (error: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error creating movie" });
    }
}

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await movieRepository.find();
        res.json(movies);
    } catch (error: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error fetching movies" });
    }
}

export const getMovieById = async (req: Request, res: Response) => {
    try {
        const movie = await movieRepository.findOne({ where: { MovieID: parseInt(req.params.id) } });
        if (movie) {
            res.json(movie);
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: "Movie not found" });
        }
    } catch (error: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error fetching movie" });
    }
}

export const updateMovieById = async (req: Request, res: Response) => {
    try {
        const movie = await movieRepository.findOne({ where: { MovieID: parseInt(req.params.id) } });
        if (movie) {
            movieRepository.merge(movie, req.body);
            const result = await movieRepository.save(movie);
            res.json(result);
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: "Movie not found" });
        }
    } catch (error: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error updating movie" });
    }
}

export const deleteMovieById = async (req: Request, res: Response) => {
    try {
        const result = await movieRepository.delete(req.params.id);
        if (result.affected === 1) {
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: "Movie not found" });
        }
    } catch (error: any) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error deleting movie" });
    }
}