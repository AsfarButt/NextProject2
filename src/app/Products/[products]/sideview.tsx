"use client";
import React,{useState, useRef, useEffect} from "react";

export default function SideView({Text}:{Text: string}){
    const container = useRef<HTMLDivElement | null>(null);
    const [MyText, setMyText] = useState(Text);
    useEffect(() => {
        console.log("Side view ");
        console.log(MyText);
        if(MyText != "" && container.current){
            container.current.classList.remove("hidden");
            const child = container.current.querySelector(".sideview");
            child?.classList.remove("translate-x-[100%]");
        }
    },[])

    return(<div className="absolute -top-40 -left-[90%] w-screen h-screen backdrop-blur-sm z-5 hidden" ref={container}>
        <div className="sideview absolute top-0 right-0 translate-x-[100%] transition-all duration-800 w-160 h-full bg-white/90 z-6">
      {Text}
    </div></div>)
}