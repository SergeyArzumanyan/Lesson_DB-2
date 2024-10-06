import { IsString, IsDate } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    ActorID: number;

    @Column()
    @IsString()
    Name: string;

    @Column()
    @IsString()
    Nationality: string;

    @Column()
    @IsDate()
    DOB: Date;
}