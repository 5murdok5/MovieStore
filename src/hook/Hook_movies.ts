import { useEffect, useState } from 'react'
import { Movie } from '../interfaces/movies'
import { getAllMovies } from '../services/getMovies'
import { dtTomInpRentDtEnd, milliToDTInp } from '../utils/helpers/date.helpers'

type stateMovies = {
  movies?: Array<Movie>
  loadMovies: Boolean
  typeServise?: string
  startDate?: string
  endDate?: string
  count: number
  movieSelected?: string
}

export const HookMovies = () => {
  const INIT_VAL = {
    movies: [],
    loadMovies: false,
    typeServise: undefined,
    startDate: milliToDTInp(Date.now()),
    endDate: dtTomInpRentDtEnd(new Date()),
    count: 0,
    movieSelected: undefined,
  }
  const [values, setValues] = useState<stateMovies>(INIT_VAL)
  useEffect(() => {
    getTestMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTestMovies = async () => {
    setValues({ ...values, loadMovies: true })
    let getData:Array<Movie> = []
    for (let index = 0; index < 4; index++) {
      let resp = await getAllMovies('harry', index).catch(err => {
        if(err.code === 'ERR_NETWORK'){
          setValues({
            ...values,
            movies: undefined,
            loadMovies: false,
          })
          return undefined
        }
      })
      getData = [...getData, ...resp?.Search ?? []]
      }
      setValues({
        ...values,
        movies: getData,
        loadMovies: false,
      })
    // let resp = await getAllMovies('harry', 1).catch(err => {
    //   if(err.code === 'ERR_NETWORK'){
    //     setValues({
    //       ...values,
    //       movies: undefined,
    //       loadMovies: false,
    //     })
    //     return undefined
    //   }
    // })
    //   setValues({
    //     ...values,
    //     movies: resp!.Search,
    //     loadMovies: false,
    //   })
  }

  const testLoad = () => {
    setValues({ ...values, loadMovies: true })
    setTimeout(() => {
      setValues({
        ...values,
        movies: undefined,
        loadMovies: false,
      })
    }, 1200)
  }

  return { values, testLoad, getTestMovies }
}
