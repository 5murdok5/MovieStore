import axios from 'axios'
import { MoviesResponseApi } from '../interfaces/movies'
import { randomPrice } from '../utils/helpers/generateRamdomPrice'

export const getAllMovies = async (
  searchTerm: string,
  page: number,
): Promise<MoviesResponseApi> => {
  return await axios
    .get<MoviesResponseApi>(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&page=${page}&r=json`,
    )
    .then((res) => {
      let resp = {
        ...res?.data,
        Search: res?.data?.Search?.map((mv) => {
          mv.price = randomPrice(10, 300)
          return mv
        }),
      }
      return resp
    })
}
