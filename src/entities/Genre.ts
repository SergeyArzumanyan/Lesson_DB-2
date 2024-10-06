import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

import { Movie } from "./Movie";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    GenreID: number;

    @Column()
    @IsString()
    GenreName: string;

    @ManyToMany(() => Movie, movie => movie.genres)
    movies: Movie[];
}
