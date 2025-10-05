"use client";
import React,{useRef, useState, useEffect} from "react";

type outfits = {
    active: boolean,
    src: string,
    inputref: HTMLDivElement | null
}

export default function Scroller(){

    const outfitgender = "Outfit-M";

    const Outfits = useRef<outfits[]>([
        {active:false, src:`/${outfitgender}/outfit1.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit2.png`, inputref: null},
        {active:true, src:`/${outfitgender}/outfit3.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit4.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit5.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit6.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit7.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit8.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit9.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit10.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit11.png`, inputref: null},
        {active:false, src:`/${outfitgender}/outfit12.png`, inputref: null}
        ]);
         const index = useRef<number | null>(null);
         const Scrollerref = useRef<HTMLDivElement | null>(null);
         const position = useRef(0);

        function OnStartUp(){
        console.log("outstartup should work");
        index.current = Outfits.current.findIndex((element) => element.active);
        if(index.current !== null){
            console.log("active index: ",index.current);
            console.log(Outfits.current);
            const active = Outfits.current[index.current];
        if(active?.inputref){
            active.inputref.classList.remove("scale-110");
            active.inputref.classList.remove("scale-100");
            active.inputref.classList.add("scale-130");
        }
        const prev1 = Outfits.current[index.current-1];
        if(prev1?.inputref){
            prev1.inputref.classList.remove("scale-100");
            prev1.inputref.classList.remove("scale-130");
            prev1.inputref.classList.add("scale-110");
        }
        const prev2 = Outfits.current[index.current-2];
        if(prev2?.inputref){
            prev2.inputref.classList.remove("scale-110");
            prev2.inputref.classList.remove("scale-130");
            prev2.inputref.classList.add("scale-100");
        }
        const news1 = Outfits.current[index.current+1];
        if(news1?.inputref){
            news1.inputref.classList.remove("scale-100");
            news1.inputref.classList.remove("scale-130");
            news1.inputref.classList.add("scale-110");
        }
        const news2 = Outfits.current[index.current+2];
        if(news2?.inputref){
            news2.inputref.classList.remove("scale-110");
            news2.inputref.classList.remove("scale-130");
            news2.inputref.classList.add("scale-100");
        }
        }
    }

    useEffect(()=>{
        OnStartUp();
    },[])
    
    function MoveLeft(){
        console.log("scroll right to go left");
        if(index.current !== null){
            console.log(index.current);
            console.log("it should move left");
            const active1 = Outfits.current[index.current];
            const active2 = Outfits.current[index.current-1];
            if(active1?.inputref){
                console.log("active 1 worked");
                active1.active = false;
            }
            if(active2?.inputref){
                console.log("active 2 worked");
                active2.active = true;
                OnStartUp();
                //Scroller move
                if(Scrollerref.current){
                    console.log("scroller move left");
                    Scrollerref.current.style.transform = `translateX(${position.current + 320}px)`;
                    position.current+=320;
                }
            }

        }
    }
    function MoveRight(){
        console.log("scroll left to go right");
            console.log("it should move right");
            if(index.current !== null){
            console.log(index.current);
            const active1 = Outfits.current[index.current];
            const active2 = Outfits.current[index.current+1];
            if(active1?.inputref){
                console.log("active 1 worked");
                active1.active = false;
            }
            if(active2?.inputref){
                console.log("active 2 worked");
                active2.active = true;
                OnStartUp();
                //Scroller move
                if(Scrollerref.current){
                    console.log("scroller move right");
                    Scrollerref.current.style.transform = `translateX(${position.current - 320}px)`;
                    position.current-=320;
                }
            }

        }
    }


    return(<div className="relative mt-20 w-full h-100 flex justify-center items-center">

        <div className="relative flex flex-row gap-10 w-390 h-100 transition-transform duration-1000 ease-in-out" ref={Scrollerref}>
        {Outfits.current.map((element, index) =>(
            <div className={`relative flex-none flex justify-center items-center w-70 h-full
            transition-all duration-1000 origin-top rounded-lg shadow-md
             bg-[linear-gradient(75deg,hsl(200, 100%, 75%),hsl(0, 0%, 100%))]`} key={index}  
             ref={(el) => {Outfits.current[index].inputref = el}}
            >
                <img className="relative w-full h-auto" src={element.src} alt={element.src} />
            </div>
        ))}
        </div>
        <div className="absolute w-full h-16 flex justify-between items-center bg-black/30 text-4xl text-white/80 mix-blend-difference
        px-4 border-box z-2">
            <div className="cursor-pointer" onClick={MoveLeft}>〈</div>
            <div className="cursor-pointer" onClick={MoveRight}>〉</div>
        </div>

    </div>)
}


