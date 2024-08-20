import styled from "styled-components";

export const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};
export const Header = styled.nav`
  transition: padding 0.25s ease-in-out;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.height};
  position: fixed;
  margin: auto;
  width: 100%;
  top: 0;
  box-shadow: 0px 0px 7px #ccc;
  z-index: 99999;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  overflow-x: hidden;
  text-align: center;
`;

export const Heading = styled.div`
  transition: transform 0.25s ease-in-out;
  transform: scale(${(props) => props.scale});
  font-size: 25px;
  font-weight: 600;
  margin-left: 3rem;
`;

export const Content = styled.p`
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
`;

export const Margin = styled.div`
  height: 1rem;
`;
export const Nav = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 50%;
  height: 70vh;
  margin: auto;
  overflow-y: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const NoBorderBtn = styled.button`
border:none;
background:none;
padding:6px 12px;
font-size:13px
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
  z-index: 99;
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

export const Card = styled.div`
  border: 1px solid #ebebee;
  width: 30em;
  margin-right: 1rem;
  font-size: 12px;
  flex: 0 0 200px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const HScroll = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  width: 100%;
  overflow-x: auto;
  user-select: none;
  scroll-behavior: smooth;
  /* transition-timing-function: linear; */
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebee;
  }
  &::-webkit-scrollbar-track-piece {
    width: 13px;
  }
`;

export const Button = styled.button`
  bottom: 15px;
  width: 100%;
  border: none;
  background-color: crimson;
  border-radius: 5px;
  padding: 3px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
`;

export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  height: 100rem;
  position: fixed;
  right: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 99999;
  padding: 2rem;
  top: 3.4rem;
`;

export const Toggle = styled.div`
  font-size: ${(props) => props.size};
`;

export const ListItem = styled.li`
  color: #000;
  font-size: 15px;
  font-style: Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
export const FixedDiv = styled.div`
  position: fixed;
`;
