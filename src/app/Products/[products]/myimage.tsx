"use client";
import React,{useEffect ,useRef ,useState} from "react";

export default function MyImage({itemname}:{itemname: string}){

    const scrollposition = useRef(0);
    const container = useRef<HTMLDivElement | null>(null);

    const Outfits = ['/Outfit-M/item1/pic1.webp',
                    '/Outfit-M/item1/pic2.webp',
                    '/Outfit-M/item1/pic3.webp',
                    '/Outfit-M/item1/pic4.webp',
                    '/Outfit-M/item1/pic5.webp',
                    '/Outfit-M/item1/pic6.webp',
                    '/Outfit-M/item1/pic7.jpg'];

    // console.log(Outfits);
    //  console.log(itemname);

    function ItScrolled(e: React.UIEvent<HTMLDivElement>){
        if(container.current){
        const top = Number(container.current.getBoundingClientRect());
        if(scrollposition.current < e.currentTarget.scrollTop){
           console.log("true");
        }
        else if(scrollposition.current > e.currentTarget.scrollTop){     //Start from here make it like of outfitters website
            console.log("it scrolled up");
        }
        scrollposition.current = e.currentTarget.scrollTop;
                    if(container.current){
                console.log(container.current.getBoundingClientRect());
            }
        }}


    return(<div className="relative min-w-130 w-[70%] h-[760px] bg-white border border-black flex flex-col overflow-y-scroll" onScroll={(e) => ItScrolled(e)}>
        <div className="relative" ref={container}>
             {Outfits.map((element) => (<img className="relative flex-none w-full h-190 pointer-events-none border borderblack/80" key={element} src={element} alt={element}/>))} 
        </div>
    </div>)
}