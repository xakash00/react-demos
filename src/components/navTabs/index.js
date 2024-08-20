import React, { useEffect, useState } from "react";
import { Dflex, Nav, Tab, NavButtons, PaddingOne } from "./styled";
import Aos from "aos";
import "aos/dist/aos.css";
const NavTabs = ({ TabTitles, TabBody, activeKey }) => {
  const [activeTab, setActiveTab] = useState(activeKey - 1);
  useEffect(() => {
    Aos.init({
      duration: 100,
    });
  }, []);
  const showActive = (n) => {
    setActiveTab(n);
  };
  return (
    <>
      <Nav>
        <Dflex>
          {TabTitles.map((item, index) => {
            return (
              <NavButtons
                key={index}
                bgColor={activeTab === index ? "#ebebee" : "none"}
                onClick={() => showActive(index)}
              >
                {item}
              </NavButtons>
            );
          })}
        </Dflex>
        <Tab>
          {TabBody.map((item, index) => {
            return (
              activeTab === index && (
                <PaddingOne data-aos="fade-left" key={index}>
                  {item}
                </PaddingOne>
              )
            );
          })}
        </Tab>
      </Nav>
    </>
  );
};

export default NavTabs;
