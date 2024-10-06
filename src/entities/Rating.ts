import { IsNumber, Min, Max } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Movie } from "./Movie";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    RatingID: number;

    @Column()
    @IsNumber()
    @Min(0)
    @Max(10)
    Rating: number;

    @ManyToOne(() => Movie, movie => movie.ratings)
    movie: Movie;
}