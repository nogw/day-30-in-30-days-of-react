import styled from 'styled-components';

export const Container = styled.div`
  background-color: #7ae582;
  border-bottom: 3px solid black;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 15px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  @media screen and (max-width: 778px) {
    flex-direction: column;
    padding: 8px;
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.div`
  margin-right: auto;
  h1 {
    color: #212121;
  }

  @media screen and (max-width: 778px) {
    margin: 0px;
    display: flex;
    justify-content: center;

    h1 {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Funcs = styled.div`
  padding: 0px 15px 0px 0px;

  input {
    outline: none;
    width: 250px;
    padding: 5px 20px 7px 20px;
    background-color: transparent;
    border: 3px solid black;
    font-size: 18px;
    font-weight: 900;
  
    &::placeholder {
      opacity: 1;
      font-size: 18px;
      font-weight: 900;
    }
  }

  @media screen and (max-width: 778px) {
    padding: 5px;
  }
`;
