import React from "react";
import Headerlayout from "../../layouts/headerLayout";
import { Body, Content } from "../../styles";

const ListItems = () => {
  return (
    <Headerlayout>
      <Body>
        {[...new Array(100)].map((item, index) => {
          return <Content key={index}>{index + 1}. I am Iron Man</Content>;
        })}
      </Body>
    </Headerlayout>
  );
};

export default ListItems;
