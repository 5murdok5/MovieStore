import { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'
import { Movie } from '../interfaces/movies'
import {
  dtTomInpRentDtEnd,
  getMilisecondsDate,
  milliToDTInp,
} from '../utils/helpers/date.helpers'
type formState = {
  typeServise?: string
  startDate?: string
  endDate?: string
  count: number
}

export function HookCart() {
  const {
    MoviesBuyState: { idMovie },
    AddMovies,
    RemoveMovies,
    SelectMovie,
  } = useContext(MovieContext)

  const INIT_VAL = {
    typeServise: undefined,
    startDate: milliToDTInp(Date.now()),
    endDate: dtTomInpRentDtEnd(new Date()),
    count: 1,
    movieSelected: undefined,
  }

  const [values, setValues] = useState<formState>(INIT_VAL)
  const { typeServise, startDate, endDate, count } = values

  const onChangeVl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const clearBuy = () => {
    setValues(INIT_VAL)
    SelectMovie('')
  }

  const addtoCart = (e: React.FormEvent<HTMLFormElement>, movie: Movie) => {
    e.preventDefault()
    AddMovies(
      movie,
      count,
      typeServise!,
      getMilisecondsDate(startDate),
      getMilisecondsDate(endDate),
    )
    clearBuy()
  }

  const selectServ = (type: string, idMovie: string) => {
    setValues({
      ...values,
      typeServise: type,
    })
    SelectMovie(idMovie)
  }

  const removeMovie = (id: string) => RemoveMovies(id)

  return {
    idMovie,
    values,
    onChangeVl,
    clearBuy,
    addtoCart,
    selectServ,
    removeMovie,
  }
}
