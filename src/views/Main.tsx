import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MovieProvider } from '../context/Moviesprovider'
import FooterCustom from '../components/FooterCustom'
import { MainMovies } from '../styles/globalstyle'
import NavCustom from '../components/NavCustom'

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
