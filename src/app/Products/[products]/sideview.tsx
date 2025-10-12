"use client";
import {Montserrat} from "next/font/google";
import React,{useState, useRef, useEffect} from "react";

const montserrat = Montserrat({
    subsets:['latin'],
    weight:['400','500']
})

export default function SideView({Text, update}:{Text: string, update: number}){        //Side view not working no re-render occur
    const container = useRef<HTMLDivElement | null>(null);
    const [MyText, setMyText] = useState<any[]>([]);

    useEffect(() => {
        const lines = Text.split("(hello)");
        setMyText(lines);
        console.log("Side view");
        console.log(MyText);
        if(MyText.length !== 0){
            console.log(Text);
            container.current?.classList.add("backdrop-blur-sm")
            container.current?.classList.remove("hidden");
            const child = container.current?.querySelector(".sideview");
            child?.classList.add("translate-x-150");
            setTimeout(()=>{child?.classList.replace("translate-x-150","translate-x-0");},10);
        }
    },[update, Text])

    function TurnOff(){
        container.current?.classList.replace("backdrop-blur-sm","backdrop-blur-0")
        const child = container.current?.querySelector(".sideview");
        child?.classList.add("translate-x-150");
        setTimeout(()=>{container.current?.classList.add("hidden")},600)
    }

    return(<div className="absolute -top-40 -left-[90%] w-screen h-screen backdrop-blur-sm transition-all duration-600 z-5 hidden" ref={container} onClick={TurnOff}>
        <div className={`sideview absolute top-0 px-8 pt-12 right-0 translate-x-150 transition-all duration-800 ease-out w-150 h-full border-box
            ${montserrat.className} bg-white/90 z-6`} onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-10 text-4xl font-regular rotate-z-45 cursor-pointer" onClick={TurnOff}>+</div>
        <h1 className="relative mb-6 font-semibold">{MyText[0]}</h1>
        <p className="relative mb-3">{MyText[1]}</p>
        <p className="relative mb-3">{MyText[2]}</p>
        <p className="relative mb-3">{MyText[3]}</p>
    </div></div>)
}