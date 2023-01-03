import { Movie } from '../interfaces/movies'
import { CardMv } from '../styles/cardmovie.style'
import FormMovies from './formMovies'
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

type propsCard = {
  movie: Movie
  from: string
}


const CardMovie = ({ movie, from = 'HOME' }: propsCard) => {
  const { MoviesBuyState: {idMovie}} = useContext(MovieContext)
  return (
    <CardMv.Card img={movie.Poster} isShop={idMovie === movie.imdbID || from==='CART'}>
      <div className="card-container">
        <div className="inside-element">
          {idMovie === movie?.imdbID? <></>:<div className='info-cont'>
            <span className="rank">⭐⭐⭐⭐⭐</span>
            <h1>{movie.Title}</h1>
            <p className="year">
              {movie.Year === '' || movie.Year === undefined
                ? 'S/Y'
                : movie.Year}
            </p>
            <span className="price">$ {movie?.price?.toFixed(2)}</span>
          </div>}
          <FormMovies movie={movie} from={from} />
        </div>
      </div>
    </CardMv.Card>
  )
}

export default CardMovie
