import { Button } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import NavTabs from "./index";
import Select,{components} from "react-select"
import {useForm,Controller} from "react-hook-form"
import { useDispatch } from "react-redux";
import { openSidebar } from "../../redux/actions/openSidebarAction";
import { Dflex } from "./styled";
import axios from "axios"
import useFetch from "../../hooks/useFetch.js"
const UseNavTabs = () => {
  return (
    <div className="container-fluid">
      <NavTabs
        TabTitles={["One", "Two", "Three","Four"]}
        TabBody={[<FirstComponent />, <SecondComponent />, <ThirdComponent />,<FourthComponent/>]}
        activeKey={1}
      />
    </div>
  );
};

export default UseNavTabs;

const FirstComponent = () => {
  const [openedItem, setOpenedItem] = useState(0);
  const handleAccordion = (i) => {
    if (openedItem === i) {
      setOpenedItem(null);
    } else {
      setOpenedItem(i);
    }
  };
  return (
    <div>
      {[...new Array(4)].map((item, i) => {
        return (
          <div key={i}>
            <Button
              className="w-100 btn btn-secondry"
              onClick={() => handleAccordion(i)}
            >
              {openedItem === i ? "close" : "open"}
            </Button>
            {openedItem === i && <div>dropdown</div>}
          </div>
        );
      })}
    </div>
  );
};
const SecondComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <p>I am Second Tab</p>
      <Button onClick={() => dispatch(openSidebar())}>Open Sidebar</Button>
    </div>
  );
};
const ThirdComponent = () => {
 const options = [{label:"one",value:"one"},{label:"two",one:"two"},{label:"three",value:"three"}]
 const Item =(props)=>{
  <components.Option {...props}>
 <Dflex>{props.label}</Dflex>
</components.Option>
 }
  return <div className="text-center">
    <h6>Custom React-Select Example</h6>
   <Select isMulti options={options} components={Item} />
  </div>;
};

const FourthComponent = ()=>{
  
const [data,error,loading] = useFetch("https://jsonplaceholder.typicode.com/posts")
  return(
    <div>four</div>
  )
}
