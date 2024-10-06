import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class InitialSchema implements MigrationInterface {
    name = 'InitialSchema'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "director",
            columns: [
                { name: "DirectorID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "Name", type: "varchar", isNullable: false },
                { name: "Nationality", type: "varchar", isNullable: false },
                { name: "DOB", type: "timestamp", isNullable: false }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "actor",
            columns: [
                { name: "ActorID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "Name", type: "varchar", isNullable: false },
                { name: "Nationality", type: "varchar", isNullable: false },
                { name: "DOB", type: "timestamp", isNullable: false }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "genre",
            columns: [
                { name: "GenreID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "GenreName", type: "varchar", isNullable: false }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "movie",
            columns: [
                { name: "MovieID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "Title", type: "varchar", isNullable: false },
                { name: "ReleaseYear", type: "int", isNullable: false },
                { name: "directorDirectorID", type: "int", isNullable: true }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "rating",
            columns: [
                { name: "RatingID", type: "int", isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: "Rating", type: "int", isNullable: false },
                { name: "movieMovieID", type: "int", isNullable: true }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "movie_genres_genre",
            columns: [
                { name: "movieMovieID", type: "int", isPrimary: true },
                { name: "genreGenreID", type: "int", isPrimary: true }
            ]
        }), true);

        await queryRunner.createForeignKey("movie", new TableForeignKey({
            columnNames: ["directorDirectorID"],
            referencedColumnNames: ["DirectorID"],
            referencedTableName: "director",
            onDelete: "NO ACTION"
        }));

        await queryRunner.createForeignKey("rating", new TableForeignKey({
            columnNames: ["movieMovieID"],
            referencedColumnNames: ["MovieID"],
            referencedTableName: "movie",
            onDelete: "NO ACTION"
        }));

        await queryRunner.createForeignKey("movie_genres_genre", new TableForeignKey({
            columnNames: ["movieMovieID"],
            referencedColumnNames: ["MovieID"],
            referencedTableName: "movie",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("movie_genres_genre", new TableForeignKey({
            columnNames: ["genreGenreID"],
            referencedColumnNames: ["GenreID"],
            referencedTableName: "genre",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movie_genres_genre");
        await queryRunner.dropTable("rating");
        await queryRunner.dropTable("movie");
        await queryRunner.dropTable("genre");
        await queryRunner.dropTable("actor");
        await queryRunner.dropTable("director");
    }
}