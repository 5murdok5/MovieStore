import styled from 'styled-components'
import { ButtonConfirm } from './globalstyle'

export const CartSection = {
  MoviesCart: styled.div`
    padding: 0px 10px;
    width: 100%;
  `,
  ContCost: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 25vh;
    margin-left: auto;
    margin-right: 0;
    padding: 20px;
    background-color: #f4f4f41f;
  `,
  BtnConfirm: styled(ButtonConfirm)`
    border-radius: 0px;
  `,

  InfoPrice: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0px 0px 25px 0;
  `,
  InfoNoItems: styled.h3`
    text-align: center;
    font-weight: 200;
    color: #ccc;
  `,
}
