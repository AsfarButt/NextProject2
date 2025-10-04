"use client";
import React,{useRef, useState, useEffect} from "react";

type outfits = {
    active: boolean,
    src: string,
    inputref: HTMLDivElement | null
}

export default function Scroller(){

    const Outfits = useRef<outfits[]>([
        {active:false, src:"/Outfit-M/outfit1.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit2.png", inputref:null},
        {active:true, src:"/Outfit-M/outfit3.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit4.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit5.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit6.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit7.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit8.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit9.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit10.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit11.png", inputref:null},
        {active:false, src:"/Outfit-M/outfit12.png", inputref:null},
    ])
    useEffect(()=>{
        const index = Outfits.current.findIndex((element) => element.active);
        if(Outfits.current[index].inputref){
        Outfits.current[index].inputref.classList.add("scale-130")
        // }
        // if(((index-1) > -1) && Outfits.current[index-1].inputref){
        // Outfits.current[index-1].inputref.classList.add("scale-110")
        // }
        // if(((index+1) > Outfits.length()) && Outfits.current[index-1].inputref){
        // Outfits.current[index-1].inputref.classList.add("scale-110")
        // }
        }
        console.log(index);
    },[])


    return(<div className="relative mt-20 w-full h-100 flex justify-center items-center">

        <div className="relative flex flex-row w-350 h-100 bg-black/30">
        {Outfits.current.map((element, index) =>(
            <div className="relative flex-none flex justify-center items-center w-70 h-full border border-black
            transition-all duration-400 origin-bottom" key={index}
            ref={(el) => {Outfits.current[index].inputref = el}}>
                <img className="relative w-full h-auto" src={element.src} alt={element.src} />
            </div>
        ))}
        </div>

    </div>)
}


