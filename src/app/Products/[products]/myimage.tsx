"use client";
import React,{useRef, useState} from "react";

export default function MyImage({itemname}:{itemname: string}){

    const container = useRef<HTMLDivElement | null>(null);
    const scrollposition = useRef(0);
    const isscrolling = useRef(false)

    const Outfits = [`/Outfit-M/${itemname}/pic1.webp`,
                    `/Outfit-M/${itemname}/pic2.webp`,
                    `/Outfit-M/${itemname}/pic3.webp`,
                    `/Outfit-M/${itemname}/pic4.webp`,
                    `/Outfit-M/${itemname}/pic5.webp`,
                    `/Outfit-M/${itemname}/pic6.webp`];

    function ImageScroll(e: React.UIEvent<HTMLDivElement>){
        // console.log(e.currentTarget.scrollTop);
        if(e.currentTarget.scrollTop - scrollposition.current > 0 && !isscrolling.current){
            console.log("it moved down");
            isscrolling.current = true;
            container.current?.scrollBy({top:1120,left: 0,behavior: 'smooth'})
            container.current?.classList.add('pointer-events-none');
            setTimeout(()=>{container.current?.classList.remove('pointer-events-none'); isscrolling.current = false;}
            ,500);
        }
        else if(e.currentTarget.scrollTop - scrollposition.current < 0 && !isscrolling.current){
            console.log("it moved up");
            isscrolling.current = true;
            container.current?.scrollBy({top:-1120,left: 0,behavior: 'smooth'})
            container.current?.classList.add('pointer-events-none');
            setTimeout(()=>{container.current?.classList.remove('pointer-events-none'); isscrolling.current = false;}
            ,500);

        }
        scrollposition.current = e.currentTarget.scrollTop;
    }

    return(<div className="scrollableelement pr-1 relative bottom-45 min-w-160 w-[80%] mr-[2px] h-280 bg-white flex flex-col overflow-y-scroll" ref={container} onScroll={(e) => ImageScroll(e)}>
             {Outfits.map((element) => (<img className="relative flex-none w-full h-280 pointer-events-none" key={element} src={element} alt={element}/>))} 
    </div>)
}