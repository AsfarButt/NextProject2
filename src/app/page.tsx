"use client";
import Header from "./header";
import Writing from "./writing";
import Scroller from "./scroller";
import React,{useEffect, useRef, useState} from "react";


export default function LandingPage(){

  const [theme, settheme] = useState(false);
  // const [Left, setLeft] = useState(0);
  // const [Right, setRight] = useState(0);

  useEffect(() => {
      setTimeout(()=>settheme(true),4100);
  },[])

  return(<div className={`relative w-screen h-[calc(100dvh-60px)] bg-white before:absolute before:z-0 before:w-full before:bg-black
  before:transition-all before:duration-1000 ${theme? "before:h-0":"before:h-full"} `}>
    <div className="pointer-events-auto">
    <Header className=""/>
    <Writing />
    <Scroller/>
    </div>

  </div>)

}