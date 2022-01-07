import React, { useContext, useEffect, useRef } from "react";
import { NavLink  } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiLinkedin, SiMicrosoftexcel } from "react-icons/si";
import { TiWeatherStormy } from "react-icons/ti";
import { TodoContext } from "../context";
import { GiNewspaper, GiMeditation, GiWeightLiftingUp } from "react-icons/gi";
import { VscGraphLine } from "react-icons/vsc";
import { SiMicrosoftword } from "react-icons/si";
import { ImCalculator } from "react-icons/im";

function Sidebar({ children }) {
  const { setSelectedTodo } = useContext(TodoContext);
  const sidebarRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  const handleClick = (e) => {
    if (
      e.target === sidebarRef.current ||
      sidebarRef.current.contains(e.target)
    ) {
      setSelectedTodo(undefined);
    }
  };
  return (
    <div className="Sidebar" ref={sidebarRef}>
      {children}
      {/* This could likely be turned into a flexbox, flex-wrap:nowrap CSS property */}
      <div className="icons">
       <SiLinkedin className="linkedIn"/>
        <FaGithub className="gitHub" />
        <FaTwitter className="twitter" />
      </div>
      <div className="icons">
        <NavLink to="/weather"><TiWeatherStormy className="stormy" /></NavLink>
        <GiNewspaper className="news" />
        <VscGraphLine className="stocks" />
      </div>
      <div className="icons">
        <SiMicrosoftword className="micro-word" />
        <SiMicrosoftexcel className="excel" />
        <AiOutlineMail className="icon-email" />
      </div>
      <div className="icons">
        <GiMeditation className="meditate" />
        <GiWeightLiftingUp className="workout" />
        <ImCalculator className="calculator" />
      </div>
    </div>
  );
}

export default Sidebar;
