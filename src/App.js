import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Headerlayout from "./layouts/headerLayout";
import { useSelector } from "react-redux";
import ModalUsage from "./components/modals/usage";
import UseNavTabs from "./components/navTabs/usageNavTabs";
import FetchApi from "./components/fetchApi";
import ImageUploading from "./components/imageUpload";
import ProductDetail from "./components/fetchApi/product";
import Chat from "./components/chat";
import Playground from "./components/playground";
import UploadAndDisplayImage from "./components/uploadImageAndDisplay";
import TicTacToe from "./components/game";
import RedditMemes from "./components/redditMemes";
import LoadData from "./components/loadData";
import MultiStepForm from "./components/multi-step-form";
import ReactForm from "./components/react-hook-form";
import ShowTyping from "./components/showTyping";
import NewContext from "./components/newContext";
import Table from "./components/table";
import ReducerExample from "./components/useReducer";
import { useEffect, useState } from "react";
import Calc from "./components/calculator";
import TodoApp from "./components/todoApp/todo";
import Checkboxes from "./components/todoApp/checkboxes";
import BookTicket from "./components/bookTicket/index";

export default function App() {
  const { dark_mode } = useSelector((store) => store.themeReducer);

  useEffect(() => {
    if (dark_mode === true) {
      document.body.style.backgroundColor = "#000";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [dark_mode]);

  return (
    <div className="App">
      <Headerlayout>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/check" element={<Checkboxes />} />
          <Route path="/reducer" element={<ReducerExample />} />
          <Route path="/image" element={<ImageUploading />} />
          <Route path="/tabs" element={<UseNavTabs />} />
          <Route path="/store" element={<FetchApi />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/play" element={<Playground />} />
          <Route path="/image" element={<UploadAndDisplayImage />} />
          <Route path="/game" element={<TicTacToe />} />
          <Route path="/reddit" element={<RedditMemes />} />
          <Route path="*" element={<>Page not Found</>} />
          <Route path="/load" element={<LoadData />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/hook-form" element={<ReactForm />} />
          <Route path="/show-typing" element={<ShowTyping />} />
          <Route path="/context" element={<NewContext />} />
          <Route path="/table" element={<Table />} />
          <Route path="/movie-tickets" element={<BookTicket />} />
        </Routes>
      </Headerlayout>
    </div>
  );
}
export function HelloWorld(str) {
  str;
}

// console.log(arr);

class User {
  constructor(name, email, passoword) {
    this.name = name;
    this.email = email;
    this.password = passoword;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeName() {
    return `${this.name.toUpperCase()}`;
  }
}

const sky = new User("akash", "akash@gmail.com", "1234");
console.log(sky.encryptPassword());
console.log(sky.changeName());

const query = "Gaming-pc-setup-3".split("-").at(-1);

console.log(query);
