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

    const [bgactive, setbgactive] = useState(true);

    const bgcolors = [`${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-1.png')] rotate-y-35 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-2.png')] rotate-y-20 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-3.png')] rotate-y-0 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-4.png')] -rotate-y-20 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-5.png')] -rotate-y-20 -translate-z-20`,
                     null, null, null, null, null, null, null];

    const colors = ["translate-y-100 translate-x-160 opacity-0",
                    "translate-y-8 scale-110 translate-y-100 translate-x-80 opacity-0",
                    "translate-y-32 scale-118 translate-y-100 opacity-0",
                    "translate-y-8 scale-110 translate-y-100 -translate-x-80 opacity-0",
                    " translate-y-100 -translate-x-160 opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0"];

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
            active.inputref.classList.replace("translate-y-8","translate-y-32");
            active.inputref.classList.replace("scale-110","scale-118");
            active.inputref.style.zIndex = "3";
        }
        const prev1 = Outfits.current[index.current-1];
        if(prev1?.inputref){
            prev1.inputref.classList.replace("scale-110","scale-118");
            prev1.inputref.classList.replace("translate-y-32","translate-y-8");
            prev1.inputref.classList.add("scale-110","translate-y-8");
            prev1.inputref.style.zIndex = "2";
        }
        const prev2 = Outfits.current[index.current-2];
        if(prev2?.inputref){
            prev2.inputref.classList.remove("translate-y-8");
             prev2.inputref.classList.remove("scale-110");
            prev2.inputref.style.zIndex = "1";
        }
        const news1 = Outfits.current[index.current+1];
        if(news1?.inputref){
            news1.inputref.classList.replace("scale-110","scale-118");
            news1.inputref.classList.replace("translate-y-32","translate-y-8");
            news1.inputref.classList.add("scale-110","translate-y-8");
            news1.inputref.style.zIndex = "2";
        }
        const news2 = Outfits.current[index.current+2];
        if(news2?.inputref){
            news2.inputref.classList.remove("translate-y-8");
            news2.inputref.classList.remove("scale-110");
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
                    Scrollerref.current.style.transform = `translateX(${position.current + 340}px)`;
                    position.current+=340;
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
                    Scrollerref.current.style.transform = `translateX(${position.current - 340}px)`;
                    position.current-=340;
                }}}}

    useLayoutEffect(()=>{
        OnStartUp(); 
        const index = Outfits.current.findIndex((element) => element.active);
            Outfits.current[index].inputref?.classList.remove("opacity-0","translate-y-100");
            Outfits.current[index-1].inputref?.classList.remove("translate-y-100");
            Outfits.current[index-1].inputref?.classList.add("translate-y-30");
            Outfits.current[index-2].inputref?.classList.remove("translate-y-100");
            Outfits.current[index-2].inputref?.classList.add("translate-y-30");
            Outfits.current[index+1].inputref?.classList.remove("translate-y-100");
            Outfits.current[index+1].inputref?.classList.add("translate-y-30");
            Outfits.current[index+2].inputref?.classList.remove("translate-y-100");
            Outfits.current[index+2].inputref?.classList.add("translate-y-30");

            setTimeout(()=>{
            Outfits.current[index-1].inputref?.classList.remove("translate-y-30","translate-x-80","opacity-0");
            Outfits.current[index-1].inputref?.classList.add("translate-y-0");
            Outfits.current[index-2].inputref?.classList.remove("translate-y-30","translate-x-160");
            Outfits.current[index-2].inputref?.classList.add("translate-y-10","translate-x-80");
            Outfits.current[index+1].inputref?.classList.remove("translate-y-30","-translate-x-80","opacity-0");
            Outfits.current[index+1].inputref?.classList.add("translate-y-0");
            Outfits.current[index+2].inputref?.classList.remove("translate-y-30","-translate-x-160");
            Outfits.current[index+2].inputref?.classList.add("translate-y-10","-translate-x-80");     

            setTimeout(()=>{
                Outfits.current[index-2].inputref?.classList.remove("translate-y-10","translate-x-80","opacity-0");
                Outfits.current[index+2].inputref?.classList.remove("translate-y-10","-translate-x-80","opacity-0");

            setTimeout(()=>{
                {Outfits.current.map((element) => element.inputref?.classList.remove("opacity-0"));
            setbgactive(false);}
            },1300)     //Start from here move it after the bg change, black screen and the lower scrollbar appear
            },800)                                  //Also add the tilted bg
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
    



    return(<div className="relative mt-20 w-full h-150 flex justify-center items-top bg-black/40">

        <div className="relative flex flex-row gap-15 w-410 h-100 transition-transform duration-1000 ease-in-out " ref={Scrollerref}>
        {Outfits.current.map((element, index) =>(
            <div className={`relative flex-none flex justify-center items-center w-70 h-full
            origin-top rounded-lg [transform-style:preserve-3d] [perspective:1000px]
             ${colors[index]}`} key={index}  
             ref={(el) => {Outfits.current[index].inputref = el}}
            >   <div className={`absolute inset-0 rounded-xl transition-all duration-800 ${bgcolors[index]}`}></div>
                <img className="relative w-full h-auto" src={element.src} alt={element.src} />
            </div>
        ))}
        </div>
        <div className="absolute w-full h-16 flex justify-between items-center text-4xl text-white/80 mix-blend-difference
        px-4 border-box z-2">
            <div className={`cursor-pointer ${(bgactive)?"pointer-events-none opacity-0":"pointer-events-auto"}`} onClick={MoveLeft}>〈</div>
            <div className={`cursor-pointer ${(bgactive)?"pointer-events-none opacity-0":"pointer-events-auto"}`} onClick={MoveRight}>〉</div>
        </div>

    </div>)
}


