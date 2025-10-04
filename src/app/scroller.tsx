"use client";
import React,{useRef, useState} from "react";

type outfits = {
    active: boolean,
    src: string
}

export default function Scroller(){

    const Outfits = useRef<outfits[]>([
        {active:false, src:"/Outfit-M/outfit1.png"},
        {active:false, src:"/Outfit-M/outfit2.png"},
        {active:false, src:"/Outfit-M/outfit3.png"},
        {active:false, src:"/Outfit-M/outfit4.png"},
        {active:false, src:"/Outfit-M/outfit5.png"},
        {active:false, src:"/Outfit-M/outfit6.png"},
        {active:false, src:"/Outfit-M/outfit7.png"},
        {active:false, src:"/Outfit-M/outfit8.png"},
        {active:false, src:"/Outfit-M/outfit9.png"},
        {active:false, src:"/Outfit-M/outfit10.png"},
        {active:false, src:"/Outfit-M/outfit11.png"},
        {active:false, src:"/Outfit-M/outfit12.png"},
    ])


    return(<div className="relative w-full h-100 flex justify-center items-center">

        <div className="relative flex flex-row w-70 h-100 bg-black/30 translate-x-[-1500px] transition-translate duration-10000 ">
        {Outfits.current.map((element, index) => (
            <div className="relative flex-none flex justify-center items-center w-full h-full shadow-md" key={index}>
                <img className="relative w-50 h-auto" src={element.src} alt={element.src} />
            </div>
        ))}
        </div>

    </div>)
}


