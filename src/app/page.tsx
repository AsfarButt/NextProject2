"use client";
import Header from "./header";
import Writing from "./writing";
import Scroller from "./scroller";
import React,{useEffect, useRef, useState} from "react";


export default function LandingPage(){

  const [theme, settheme] = useState(false);
  useEffect(() => {
      setTimeout(()=>settheme(true),2000);
  },[])

  return(<div className={`relative w-screen h-screen bg-white before:absolute before:z-0 before:w-full before:bg-black
  before:transition-all before:duration-1000 ${theme? "before:h-0":"before:h-full"}`}>
    <Header className=""/>
    <Writing />
    <Scroller />

  </div>)

}