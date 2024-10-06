import { IsString, IsInt, Min, Max } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";

import { Genre } from "./Genre";
import { Rating } from "./Rating";
import { Director } from "./Director";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    MovieID: number;

    @Column()
    @IsString()
    Title: string;

    @Column()
    @IsInt()
    @Min(1800)
    @Max(new Date().getFullYear())
    ReleaseYear: number;

    @ManyToOne(() => Director, director => director.movies)
    director: Director;

    @ManyToMany(() => Genre, genre => genre.movies)
    @JoinTable()
    genres: Genre[];

    @OneToMany(() => Rating, rating => rating.movie)
    ratings: Rating[];
}