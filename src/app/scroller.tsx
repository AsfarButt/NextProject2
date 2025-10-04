"use client";
import React,{useRef, useState, useEffect} from "react";

type outfits = {
    active: boolean,
    src: string,
    inputref: HTMLDivElement | null
}

export default function Scroller(){

    const [Outfits, setOutfits] = useState<outfits[]>([
        {active:false, src:"/Outfit-M/outfit1.png"},
        {active:false, src:"/Outfit-M/outfit2.png"},
        {active:true, src:"/Outfit-M/outfit3.png"},
        {active:false, src:"/Outfit-M/outfit4.png"},
        {active:false, src:"/Outfit-M/outfit5.png"},
        {active:false, src:"/Outfit-M/outfit6.png"},
        {active:false, src:"/Outfit-M/outfit7.png"},
        {active:false, src:"/Outfit-M/outfit8.png"},
        {active:false, src:"/Outfit-M/outfit9.png"},
        {active:false, src:"/Outfit-M/outfit10.png"},
        {active:false, src:"/Outfit-M/outfit11.png"},
        {active:false, src:"/Outfit-M/outfit12.png"},
        ]);
         const index = useRef<number | null>(null);

        function OnStartUp(){
        index.current = Outfits.current.findIndex((element) => element.active);
        if(index.current){
            console.log("active index: ",index.current);
            console.log(Outfits.current);
            const active = Outfits.current[index.current];
        if(active?.inputref){
        active.inputref.style.transform("scale(1.3)")
        }
        const prev1 = Outfits.current[index.current-1];
        if(prev1?.inputref){
        prev1.inputref.style.transform("scale(1.3)")
        }
        const prev2 = Outfits.current[index.current-2];
        if(prev2?.inputref){
        prev2.inputref.style.transform("scale(1.3)")
        }
        const news1 = Outfits.current[index.current+1];
        if(news1?.inputref){
        news1.inputref.style.transform("scale(1.3)")
        }
        const new2 = Outfits.current[index.current+2];
        if(new2?.inputref){
        new2.inputref.style.transform("scale(1.3)")
        }
        }
    }

    useEffect(()=>{
        OnStartUp();
    },[])
    function MoveLeft(){
        console.log("scroll right to go left");
        if(index.current){
            console.log("it should move left");
            const active1 = Outfits.current[index.current];
            const active2 = Outfits.current[index.current-1];
            if(active1?.inputref && active2?.inputref){
                active1.active = false;
                active2.active = true;
                OnStartUp();
            }

        }
    }
    function MoveRight(){
        console.log("scroll left to go right");
        if(index.current){
            console.log("it should move right");
            const active1 = Outfits.current[index.current];
            const active2 = Outfits.current[index.current+1];
            if(active1?.inputref && active2?.inputref){
                active1.active = false;
                active2.active = true;
                OnStartUp();
            }

        }
    }


    return(<div className="relative mt-20 w-full h-100 flex justify-center items-center">

        <div className="relative flex flex-row w-350 h-100">
        {Outfits.map((element, index) =>(
            <div className={`relative flex-none flex justify-center items-center w-70 h-full border border-black
            transition-all duration-400 origin-top ${Outfits[index]}`} key={index}    //try to use State to control these scalings as ref are lengthly and cause extra time state is efficient and will only trigger when required
            // ref={(el) => {Outfits.current[index].inputref = el}}
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


