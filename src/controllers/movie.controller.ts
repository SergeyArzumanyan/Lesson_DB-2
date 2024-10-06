import { Router } from 'express';

import {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovieById,
    deleteMovieById,
} from "../services/movie.service";

export const movieRouter = Router();

movieRouter.post('/', createMovie);
movieRouter.get('/', getAllMovies);
movieRouter.get('/:id', getMovieById);
movieRouter.put('/:id', updateMovieById);
movieRouter.delete('/:id', deleteMovieById);