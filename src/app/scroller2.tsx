"use client";
import React,{useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";



export default function Scroller2({Scroll}:{Scroll:string}){

    const container = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const Outfits = [
    ["/Outfit-M/outfit1.png", "Classic White Tee", "$18","/Background2/bg-1.png"],
    ["/Outfit-M/outfit2.png", "Black Graphic Tee", "$22","/Background2/bg-2.png"],
    ["/Outfit-M/outfit3.png", "Vintage Wash Tee", "$25","/Background2/bg-3.png"],
    ["/Outfit-M/outfit4.png", "Striped Cotton Tee", "$20","/Background2/bg-4.png"],
    ["/Outfit-M/outfit5.png", "Oversized Streetwear Tee", "$28","/Background2/bg-5.png"],
    ["/Outfit-M/outfit6.png", "Minimal Logo Tee", "$24","/Background2/bg-6.png"],
    ["/Outfit-M/outfit7.png", "Heather Grey Crewneck", "$19","/Background2/bg-7.png"],
    ["/Outfit-M/outfit8.png", "Retro Print Tee", "$27","/Background2/bg-8.png"],
    ["/Outfit-M/outfit9.png", "Longline Urban Tee", "$26","/Background2/bg-9.png"],
    ["/Outfit-M/outfit10.png", "Pocket Tee", "$21","/Background2/bg-10.png"],
    ["/Outfit-M/outfit11.png", "Tie-Dye Tee", "$23","/Background2/bg-11.png"],
    ["/Outfit-M/outfit12.png", "Athletic Fit Tee", "$30","/Background2/bg-12.png"],   //Start with this do whatever is right as you go
    ];

    useEffect(()=>{
        setTimeout(()=>{
            if(container.current){
                container.current.classList.remove("mt-60");
            }
        },3400)
    },[])

    function RedirectFunc(index: number){
        console.log("redirect func in process");
        const item = "item"+String(index+1);
        router.push(`./Products/${item}`);
    }

    return(<div className="relative mt-60 w-full h-60 flex justify-center transition-all duration-800 z-100" ref={container}>
        <div className="relative w-410 h-full flex flex-row">
            {Outfits.map((element, index) => 
                (<div className="relative h-full flex-none flex flex-col w-82 overflow-hidden" key={index} onClick={() => RedirectFunc(index)}>
                    <img src={element[0]} className="relative z-1 w-full top-[-38px]"/>
                    <img src={element[3]} className="absolute z-0 inset-0 blur-[1px] brightness-75 opacity-90 pointer-events-none" alt={`${index+1}`}/>
                    <div className="absolute text-xl bottom-0 h-[50%] z-2 w-full bg-black text-white/80 font-sans">
                    <h1>{element[1]}</h1>
                    <h2 className="text-lg">{element[2]}</h2></div>
                </div>))}
        </div>
    </div>)
}