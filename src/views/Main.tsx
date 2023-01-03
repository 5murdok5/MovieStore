import { Outlet } from 'react-router-dom'
import FooterCustom from '../components/FooterCustom'
import NavCustom from '../components/NavCustom'
import { MovieProvider } from '../context/Moviesprovider'
import { MainMovies } from '../styles/globalstyle'

const Main = () => {
  return (
    <MovieProvider>
      <NavCustom />
      <MainMovies>
        <Outlet />
      </MainMovies>
      <FooterCustom />
    </MovieProvider>
  )
}

export default Main
