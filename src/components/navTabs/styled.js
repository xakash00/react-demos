import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const Margin = styled.div`
  height: 5.6rem;
`;
export const Nav = styled.div`
  box-shadow: 0px 0px 7px #ccc;
  border-radius: 10px;
  width: 50%;
  height: 70vh;
  margin: auto;
  overflow-y: hidden;
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;
export const NavButtons = styled.div`
  transition: background-color 0.4s ease-in-out;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;
export const Dflex = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebee;
  position: relative;
  z-index: 99;
  width: 100%;
`;

export const Tab = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 60vh;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    color: red;
    background-color: black;
    border-radius: 9px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebee;
  }
`;

export const PaddingOne = styled.div`
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
