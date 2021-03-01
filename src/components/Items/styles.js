import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 778px) {
    margin-top: 100px;
  }
`;

export const Item = styled(motion.a)`
  cursor: pointer;
  text-decoration: none;
  background-color: #7ae582;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 3px solid black;
  margin: 10px;

  img {
    border: 3px solid black;
    height: 150px;
    width: 300px;
    object-fit: cover;
  }

  h1 {
    font-size: 20px;
    color: #000;
    margin: 20px 0px 15px 0px;
  }
`;
