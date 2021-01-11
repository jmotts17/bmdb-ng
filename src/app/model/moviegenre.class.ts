export class MovieGenre {

    id: number;
    movie: string;
    genre: string;

    constructor(id:number = 0, movie:string = "", genre:string = "") {
        this.id = id;
        this.movie = movie;
        this.genre = genre;
    }

}