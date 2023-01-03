import styled from 'styled-components'

export const ContBuyActions = styled.div`
  width: 100%;
  border-radius: 5px;
  h1{
    font-weight: 500;
    padding:  10px 0px 10px 10px  ;
  }
`

export const FomrShop = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const InpCont = styled.div`
  margin: 0px 32px 5px 10px;
`

export const InputCustom = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

  label {
    color: #ffffffcb;
    font-family: 'Roboto', sans-serif;
  }

  input {
    border: 0.5px solid #cccccc52;
    border-radius: 4px;
    background: transparent;
    width: calc(100%);
    padding: 10px;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
    color-scheme: dark;
    filter: brightness(85%);
    &:focus {
      outline: none;
      border: 0.5px solid #ccccccbb;
    }
  }
`
export const ContBtnsShop = styled.div`
  width: 250px;
  flex-direction: column;

`
