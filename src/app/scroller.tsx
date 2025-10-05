"use client";
import React,{useRef, useState, useEffect, useLayoutEffect} from "react";

type outfits = {
    active: boolean,
    src: string,
    inputref: HTMLDivElement | null
}

export default function Scroller(){
                                                            //Create an array of colors stored in gradienttest
    const outfitgender = "Outfit-M";

    const colors = ["before:bg-[url('/Background/bg-1.png')] scale-110 translate-y-100 translate-x-160 opacity-0",
                    "before:bg-[url('/Background/bg-2.png')] scale-110 translate-y-100 translate-x-80 opacity-0",
                    "before:bg-[url('/Background/bg-3.png')] scale-140 translate-y-100 opacity-0",
                    "before:bg-[url('/Background/bg-4.png')] scale-110 translate-y-100 -translate-x-80 opacity-0",
                    "before:bg-[url('/Background/bg-5.png')] scale-110 translate-y-100 -translate-x-160 opacity-0",
                    null, null,
                    null, null,
                    null, null,
                    null];

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
            active.inputref.classList.remove("scale-110","scale-100");
            active.inputref.classList.add("scale-140");
            active.inputref.style.zIndex = "3";
        }
        const prev1 = Outfits.current[index.current-1];
        if(prev1?.inputref){
            prev1.inputref.classList.remove("scale-100","scale-140");
            prev1.inputref.classList.add("scale-110");
            prev1.inputref.style.zIndex = "2";
        }
        const prev2 = Outfits.current[index.current-2];
        if(prev2?.inputref){
            prev2.inputref.classList.remove("scale-110","scale-140");
            prev2.inputref.classList.add("scale-100");
            prev2.inputref.style.zIndex = "1";
        }
        const news1 = Outfits.current[index.current+1];
        if(news1?.inputref){
            news1.inputref.classList.remove("scale-100","scale-140");
            news1.inputref.classList.add("scale-110");
            news1.inputref.style.zIndex = "2";
        }
        const news2 = Outfits.current[index.current+2];
        if(news2?.inputref){
            news2.inputref.classList.remove("scale-110","scale-140");
            news2.inputref.classList.add("scale-100");
            news2.inputref.style.zIndex = "1";
        }
        }
    }

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
                }}}}

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
                }}}}

    useLayoutEffect(()=>{
        OnStartUp(); 
        const index = Outfits.current.findIndex((element) => element.active);
            Outfits.current[index].inputref?.classList.remove("opacity-0","translate-y-100");
            Outfits.current[index-1].inputref?.classList.remove("translate-y-100");
            Outfits.current[index-1].inputref?.classList.add("translate-y-20");
            Outfits.current[index-2].inputref?.classList.remove("translate-y-100");
            Outfits.current[index-2].inputref?.classList.add("translate-y-30");
            Outfits.current[index+1].inputref?.classList.remove("translate-y-100");
            Outfits.current[index+1].inputref?.classList.add("translate-y-20");
            Outfits.current[index+2].inputref?.classList.remove("translate-y-100");
            Outfits.current[index+2].inputref?.classList.add("translate-y-30");

            setTimeout(()=>{
            Outfits.current[index-1].inputref?.classList.remove("translate-y-20","translate-x-80","opacity-0");
            Outfits.current[index-1].inputref?.classList.add("translate-y-0");
            Outfits.current[index-2].inputref?.classList.remove("translate-y-30","translate-x-160");
            Outfits.current[index-2].inputref?.classList.add("translate-y-10","translate-x-80");
            Outfits.current[index+1].inputref?.classList.remove("translate-y-20","-translate-x-80","opacity-0");
            Outfits.current[index+1].inputref?.classList.add("translate-y-0");
            Outfits.current[index+2].inputref?.classList.remove("translate-y-30","-translate-x-160");
            Outfits.current[index+2].inputref?.classList.add("translate-y-10","-translate-x-80");     

            setTimeout(()=>{
                Outfits.current[index-2].inputref?.classList.remove("translate-y-10","translate-x-80","opacity-0");
                Outfits.current[index+2].inputref?.classList.remove("translate-y-10","-translate-x-80","opacity-0");

            setTimeout(()=>{MoveRight();},800)     //Start from here move it after the bg change, black screen and the lower scrollbar appear
            },700)
            },1000)




            

        Outfits.current.map(element => {element.inputref?.classList.remove("transition-none"); element.inputref?.classList.add("transition-all"); element.inputref?.classList.add("duration-1000")});
    },[])
    useEffect(()=>{

        setTimeout(() => {
            Outfits.current.map((element) => {
                element.inputref?.classList.remove("before:opacity-90");
                element.inputref?.classList.add("before:opacity-0");
            })},3200)
    },[])
    



    return(<div className="relative mt-20 w-full h-100 flex justify-center items-center">

        <div className="relative flex flex-row gap-10 w-390 h-100 transition-transform duration-1000 ease-in-out
        [transform-style:preserve-3d] [perspective:1000px]" ref={Scrollerref}>
        {Outfits.current.map((element, index) =>(
            <div className={`relative flex-none flex justify-center items-center w-70 h-full
            origin-top transition-none rounded-lg before:absolute before:inset-0 before:brightness-150
              before:opacity-90 overflow-hidden before:transition-all before:duration-600
             ${colors[index]}`} key={index}  
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


