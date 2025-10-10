"use client";
import React,{useRef, useState, useEffect, useLayoutEffect} from "react";

type outfits = {
    active: boolean,
    src: string,
    inputref: HTMLDivElement | null
}

export default function Scroller(){
                                              
    const outfitgender = "Outfit-M";   //Use this to toggle bw clothes;

    const container = useRef<HTMLDivElement | null>(null);
    const Scroller2ref = useRef<HTMLDivElement | null>(null);

    const [bgactive, setbgactive] = useState(true);

    const bgcolors = [`${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-1.png')] rotate-y-35 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-2.png')] rotate-y-20 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-3.png')] rotate-y-0 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-4.png')] -rotate-y-20 -translate-z-20`,
                    `${(bgactive)? "opacity-100":"opacity-0"} bg-[url('/Background/bg-5.png')] -rotate-y-20 -translate-z-20`,
                     null, null, null, null, null, null, null];

    const colors = ["translate-y-150 translate-x-160 opacity-0 ml-[30px]",
                    "translate-y-8 scale-110 translate-y-150 translate-x-80 opacity-0",
                    "translate-y-32 scale-118 translate-y-150 opacity-0",
                    "translate-y-8 scale-110 translate-y-150 -translate-x-80 opacity-0",
                    " translate-y-150 -translate-x-160 opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0", "opacity-0",
                    "opacity-0"];

const OutfitsScrl2 = [
  [`/${outfitgender}/outfit1.png`, "Classic White Tee", "$18", "4.5", "/Background2/bg-1.png"],
  [`/${outfitgender}/outfit2.png`, "Black Graphic Tee", "$22", "4.2", "/Background2/bg-2.png"],
  [`/${outfitgender}/outfit3.png`, "Vintage Wash Tee", "$25", "4.8", "/Background2/bg-3.png"],
  [`/${outfitgender}/outfit4.png`, "Striped Cotton Tee", "$20", "4.0", "/Background2/bg-4.png"],
  [`/${outfitgender}/outfit5.png`, "Oversized Streetwear Tee", "$28", "4.7", "/Background2/bg-5.png"],
  [`/${outfitgender}/outfit6.png`, "Minimal Logo Tee", "$24", "4.3", "/Background2/bg-6.png"],
  [`/${outfitgender}/outfit7.png`, "Heather Grey Crewneck", "$19", "4.1", "/Background2/bg-7.png"],
  [`/${outfitgender}/outfit8.png`, "Retro Print Tee", "$27", "4.6", "/Background2/bg-8.png"],
  [`/${outfitgender}/outfit9.png`, "Longline Urban Tee", "$26", "4.4", "/Background2/bg-9.png"],
  [`/${outfitgender}/outfit10.png`, "Pocket Tee", "$21", "4.0", "/Background2/bg-10.png"],
  [`/${outfitgender}/outfit11.png`, "Tie-Dye Tee", "$23", "4.2", "/Background2/bg-11.png"],
  [`/${outfitgender}/outfit12.png`, "Athletic Fit Tee", "$30", "4.9", "/Background2/bg-12.png"],
];

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

        const scroller = useRef<HTMLDivElement | null>(null);

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
                if(Scrollerref.current && Scroller2ref.current){
                    console.log("scroller move left");
                    position.current+=340;
                    Scrollerref.current.style.transform = `translateX(${position.current}px)`;
                    Scroller2ref.current.style.transform = `translateX(${position.current}px)`;
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
                if(Scrollerref.current && Scroller2ref.current){
                    console.log("scroller move right");
                    position.current-=340;
                    Scrollerref.current.style.transform = `translateX(${position.current}px)`;
                    Scroller2ref.current.style.transform = `translateX(${position.current}px)`;
                }}}}

    useLayoutEffect(()=>{
        OnStartUp(); 
        const index = Outfits.current.findIndex((element) => element.active);
            // Outfits.current[index].inputref?.classList.replace("duration-800","duration-5000");   //also try to make the 1st element pop-up a little more slow hence smooth
            setTimeout(()=>{
            Outfits.current[index].inputref?.classList.remove("opacity-0","translate-y-150");
            Outfits.current[index-1].inputref?.classList.remove("translate-y-150");
            Outfits.current[index-1].inputref?.classList.add("translate-y-30");
            Outfits.current[index-2].inputref?.classList.remove("translate-y-150");
            Outfits.current[index-2].inputref?.classList.add("translate-y-30");
            Outfits.current[index+1].inputref?.classList.remove("translate-y-150");
            Outfits.current[index+1].inputref?.classList.add("translate-y-30");
            Outfits.current[index+2].inputref?.classList.remove("translate-y-150");
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
            setbgactive(false);
            setTimeout(()=>{
                if(container.current && scroller.current && Scroller2ref.current){
                    // container.current.classList.replace("mt-80","mt-20");
                    container.current.classList.replace("-bottom-60","bottom-0");
                    scroller.current.classList.remove("mt-10");
                    Scroller2ref.current.classList.remove("opacity-0");

                    // Scrollerref.current.classList.remove("scale-105");
                setTimeout(()=>{MoveRight()},1000)
                }
            },700)}
            },1300)     //Start from here move it after the bg change, black screen and the lower scrollbar appear
            },800)                                  //Also add the tilted bg
            },1000)
            },1000)





            

        Outfits.current.map(element => {
            element.inputref?.classList.remove("transition-none");
             element.inputref?.classList.add("transition-all");
              element.inputref?.classList.add("duration-1000")});
    },[])
    useEffect(()=>{

        setTimeout(() => {
            Outfits.current.map((element) => {
                element.inputref?.classList.remove("before:opacity-90");
                element.inputref?.classList.add("before:opacity-0");
            })},3200)
    },[])
    



    return(<div className="absolute -bottom-60 w-full h-screen flex justify-center flex-col items-top transition-all duration-800 " ref={container}>

        <div className="relative transition-all mt-10 mb-10 duration-800 w-full h-200 flex-none flex items-top justify-center border-box" ref={scroller}>
            <div className="relative flex flex-row gap-15 w-425 h-100 transition-transform duration-1000 ease-in-out" ref={Scrollerref}>
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
            <div className="absolute w-full h-full flex justify-between items-center text-4xl text-white/80 mix-blend-difference
            px-4 border-box z-2">
                <div className={`cursor-pointer ${(bgactive)?"pointer-events-none opacity-0":"pointer-events-auto"}`} onClick={MoveLeft}>〈</div>
                <div className={`cursor-pointer ${(bgactive)?"pointer-events-none opacity-0":"pointer-events-auto"}`} onClick={MoveRight}>〉</div>
            </div>
        </div>

    <div className="relative border border-transparent opacity-0 w-full h-60 flex-none flex justify-center transition-transform duration-1100" ref={Scroller2ref}>
            <div className="relative w-425 h-full flex flex-row transition-all duration-800">
                {OutfitsScrl2.map((element, index) => 
                    (<div className="relative h-full flex-none flex flex-col w-85 overflow-hidden" key={index}>
                        <div className=""></div>   
                        {/* here make a hear tricon already downloaded and onClick change its src to fully filled one also do this without state using atts of onClick eg: (el) => el.currentTarget.bg.src ="" ijgiseagie etc etc */}
                        <img src={element[0]} className="relative z-1 w-full top-[-38px]"/>
                        <img src={element[4]} className="absolute z-0 inset-0 blur-[1px] brightness-75 opacity-90" alt={`${index+1}`}/>
                        <div className="absolute text-xl bottom-0 h-[38%] z-2 w-full bg-blue-100 brightness-175">
                            <div className="flex justify-between">
                        <h1 className="font-semibold px-2 inline-block text-lg">{element[1]}</h1>
                        <h2 className="font-bold px-4 inline-block text-2xl">{element[2]}</h2></div>
                        <h3>{element[3]}</h3></div>
                    </div>))}
            </div>
        </div>
    </div>)
}


