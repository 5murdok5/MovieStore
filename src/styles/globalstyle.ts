import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #0c0b11;
  }
  #root{
    margin:0 auto;
  }
`

export const TitlesItems = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #ff3d3d;
  font-weight: 900;
  margin-top: 20px;
  margin-bottom: 25px;
`
export const MainMovies = styled.div`
  background: #1b1926;
  padding: 50px 20px 40px 20px;
`
export const MainMoviesInside = styled.div`
  /* min-height: 100%; */
  /* margin: 0 auto -50px; */
`

// Buttons
export const BtnCusto = styled.button`
  cursor: pointer;
  padding: 10px 5px;
  font-weight: 700;
  width: 100%;
`

export const ButtonBuy = styled(BtnCusto)`
  border: 1px solid #ff3d3d;
  color: #ff3d3d;
  background-color: transparent;
  opacity: 0.8;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: #ff3d3d;
    opacity: 1;
    color: white;
  }
`
export const ButtonRent = styled(BtnCusto)`
  border: 1px solid white;
  color: white;
  background-color: transparent;
  opacity: 0.8;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  border-bottom-left-radius: 10px;
  &:hover {
    background-color: white;
    opacity: 1;
    color: black;
  }
`

export const ButtonCancel = styled(BtnCusto)`
  border: 1px solid #ff3d3d;
  color: #ff3d3d;
  background-color: transparent;
  opacity: 0.8;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  &:hover {
    background-color: #ff3d3d;
    opacity: 1;
    color: white;
  }
`
export const ButtonConfirm = styled(BtnCusto)`
  border: 1px solid #7fffa5;
  color: #7fffa5;
  background-color: transparent;
  opacity: 0.8;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: #7fffa5;
    opacity: 1;
    color: black;
  }
`

export const ButtonDeleteCart = styled(BtnCusto)`
  border: 1px solid #ff3d3d;
  color: white;
  background-color: transparent;
  opacity: 0.8;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: #ff3d3d;
    opacity: 1;
    color: white;
  }
`

export const ButtonError = styled.div`
  z-index: 4;
  position: fixed;
  bottom: 20px;
  align-items: flex-end;
  border: 0;
  right: 20px;
`
