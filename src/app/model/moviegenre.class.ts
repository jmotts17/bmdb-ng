import { Genre } from "./genre.class";
import { Movie } from "./movie.class";

export class MovieGenre {
    id: number;
    movie: Movie;
    genre: Genre;
    // Derived from movie / actor for sorting purposes
    movieTitle: string;
    movieGenre: string;

    constructor(id:number = 0, movie:Movie = new Movie(), genre:Genre = new Genre()) {
        this.id = id;
        this.movie = movie;
        this.genre = genre;
    }

}