import { useEffect, useState } from "react";
import {
  Button,
  Header,
  Heading,
  ListItem,
  Margin,
  NoBorderBtn,
  Sidebar,
  Toggle,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  closeSidebar,
  toggleSidebar,
} from "../redux/actions/openSidebarAction";

export default function Headerlayout({ children }) {
  const [offset, setOffset] = useState();
  const state = useSelector((store) => store.toggleReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = this?.scrollY;
      setOffset(scroll);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  const Menu = [
    {
      path: "/",
      Label: "Calculator",
    },
    {
      path: "/check",
      Label: "Context",
    },
    {
      path: "/store",
      Label: "Store",
    },
    {
      path: "/tabs",
      Label: "Table",
    },
    {
      path: "/play",
      Label: "Playground",
    },
    {
      path: "/hook-form",
      Label: "React-hook-form",
    },
    {
      path: "/load",
      Label: "Gifs",
    },
    {
      path: "/reddit",
      Label: "Reddit Memes",
    },
    {
      path: "/show-typing",
      Label: "Show Typing",
    },
    {
      path: "/context",
      Label: "Context",
    },
    {
      path: "/table",
      Label: "Table",
    },
  ];

  return (
    <div className="lead">
      <Header
        className="navbar navbar-expand-lg"
        height={offset > 100 ? "0.5rem" : "1.2rem"}
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
      >
        <Heading
          onClick={() => dispatch(closeSidebar())}
          scale={offset > 100 ? "0.8" : "1.1"}
        >
          <Link to={{ pathname: "/" }}>Aakash</Link>
        </Heading>
        <Toggle
          className="btn"
          size={offset > 100 ? "20" : "25"}
          onClick={() => dispatch(toggleSidebar())}
        >
          <i className="ri-menu-line"></i>
        </Toggle>
      </Header>
      <Margin /> <Margin />
      <Margin />
      <Margin />
      <Margin />
      {children}
      <Sidebar
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
        sidebar={state.isOpen === true ? "0%" : "-100%"}
      >
        <NoBorderBtn
          onClick={() => {
            dispatch({ type: "SWITCH" });
          }}
        >
          Toggle
        </NoBorderBtn>
        <ul
          onClick={() => dispatch(toggleSidebar())}
          className="list-unstyled text-center"
        >
          {Menu.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={item.path}>{item.Label}</Link>
              </ListItem>
            );
          })}
        </ul>
      </Sidebar>
    </div>
  );
}

