"use client";
import React,{useEffect, useRef, useState} from "react";
import {Cormorant_Garamond} from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
})

export default function Writing(){
    const leftside = useRef<HTMLDivElement | null>(null);
    const rightside1 = useRef<HTMLHeadingElement | null>(null);
    const rightside2 = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if(leftside.current){
            leftside.current.classList.remove("w-0");
            leftside.current.classList.add("w-1/2");
            leftside.current.classList.remove("scale-110");
        }
        if(rightside1.current){
            rightside1.current.classList.add("w-full");
            setTimeout(()=>{
                if(rightside2.current){
            rightside2.current.classList.add("w-full");
                }
            },1000)
        }
    },[])

    return(<div className="relative mt-8 w-full h-36 flex flex-row items-top justify-between">
        <div className="relative w-0 overflow-hidden scale-110 origin-left transition-all ease-out duration-1200" ref={leftside}>
            <div className=" mx-6 text-left text-white/80 w-[45vw]">
            A luxury clothing house that unites timeless elegance with modern sophistication. Each design is 
             crafted with precision to inspire confidence, grace, and beauty, offering more than fashion — a true statement of refined
              living.</div>
        </div>
        <div className={` ${cormorant.className} mx-4 text-4xl w-1/3 max-w-85 text-white/80`}>
        <div className="w-0 whitespace-nowrap overflow-hidden transition-all duration-1500" ref={rightside1}>DESIGNED TO MAKE</div>
        <div className="w-0 whitespace-nowrap relative ml-20 overflow-hidden transition-all duration-1500" ref={rightside2}>AN ENTRANCE</div>
        </div>
    </div>)
}