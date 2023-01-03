export interface Movie {
  Title: string
  Year: string
  Type: string
  Poster: string
  imdbID: string
  price: number
}

export interface Rating {
  Source: string
  Value: string
}

export interface MoviesResponseApi {
  Response: String
  Search: Array<Movie>
  totalResults: String
}
export interface MoviesServ {
  typeService: String
  count: Number
  dateStart: number
  dateEnd: number
  movie: Movie

}

export interface MoviesBuyState {
  total: number
  listMovies: Array<MoviesServ>
  idMovie: string
}

