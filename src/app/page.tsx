"use client";
import Header from "./header";
import Writing from "./writing";
import Scroller from "./scroller";
import React,{useEffect, useRef} from "react";


export default function LandingPage(){

  const body = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if(body.current){
        body.current.classList.add("before:w-0");
      }
    },5000)
  },[])

  return(<div className="relative w-screen h-screen bg-white before:absolute before:z-0 before:inset-0 before:bg-black
  before:transition-all before:duration-3000" ref={body}>
    <Header className=""/>
    <Writing />
    <Scroller />

  </div>)

}