import { Movie, MoviesServ } from '../../interfaces/movies';

export function calculatePrice(listMovies:Array<MoviesServ>) {
    let price = 0
    for (const item of listMovies) {
        price = item.movie.price+ price
    }    
    return price
}