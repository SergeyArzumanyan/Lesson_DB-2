import { IsString, IsDate } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { Movie } from "./Movie";

@Entity()
export class Director {
    @PrimaryGeneratedColumn()
    DirectorID: number;

    @Column()
    @IsString()
    Name: string;

    @Column()
    @IsString()
    Nationality: string;

    @Column()
    @IsDate()
    DOB: Date;

    @OneToMany(() => Movie, movie => movie.director)
    movies: Movie[];
}