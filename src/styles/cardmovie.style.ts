import styled from 'styled-components'

interface PropsCard {
  isShop: boolean
  img: string
}

export const CardMv = {
  Card: styled.div<PropsCard>`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    .card-container {
      background-color: #2a2838;
      background-image: url(${(props) => props.img});
      background-size: cover;
      background-position: center;
      margin: 5px;
      width: 250px;
      height: 350px;
      position: relative;
      box-shadow: #25252533 0px 8px 24px;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
    }

    .inside-element {
      width: 100%;
      position: absolute;
      bottom: 0;
      background-color: #000000d5;
      opacity: ${(props) => (props.isShop ? '1' : '0')};
      transform: translate3d(
        0px,
        ${(props) => (props.isShop ? '0' : '100%')},
        0px
      );
      transition: transform 0.3s ease-in-out, opacity 0.4s;
    }

    .info-cont {
      padding: 25px 15px;
    }

    .card-container:hover .inside-element {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }

    .rank {
      font-size: 13px;
      color: #7fffbb;
    }
    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: white;
      font-weight: 300;
      text-overflow: ellipsis;
      display: -webkit-box;
      padding: 10px 0;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .year {
      color: #ffffffb7;
    }
    .price {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
      font-size: 25px;
      padding: 8px 0px;
      float: right;
    }
  `,
}

export const ContBtns = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`
