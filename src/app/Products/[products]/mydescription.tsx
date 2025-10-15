"use client";
import React,{useRef, useState, useEffect} from "react";
import {Space_Grotesk, Montserrat, Sansation} from "next/font/google";
import SideView from "./sideview";
import {useRouter} from "next/navigation";

const spacegrotesk = Space_Grotesk({
    subsets:['latin'],
    weight:['300','400','500'],
})

const montserrat = Montserrat({
    subsets:['latin'],
    weight:['300','400','500']
})

const sansation = Sansation({
    subsets:['latin'],
    weight:['400','700'],
})

export default function MyDescription({text}:{text:string}){            
    const Lines = text.split("\n");
    const router = useRouter();
    const [selectedState, setselectedState] = useState(0);
    const ButtonRef = useRef<(HTMLDivElement | null)[]>([]);
    const [SideViewText, setSideViewText ] = useState(" ");
    const [SideViewUpdate, setSideViewUpdate] = useState(1);

    function SideViewFunc(index: number){  
        console.log(Lines);
        console.log(Lines[6+index]);
        setSideViewText(Lines[6+index]);
        setSideViewUpdate(e => e+1);
    }

    useEffect(()=>{console.log(SideViewText)},[SideViewText])

    function HomeNavigate(){
        router.push("/Home");
    }

    return(
    <div className="relative w-full h-full">
        <div className="relative top-0 w-full h-20 z-5">
        <div className="absolute right-[5%] mt-6 flex gap-5">
            <img src="/Home.png" alt="home icon" className="w-10 h-10" onClick={HomeNavigate}/>    
            <img src="/search.png" alt="search icon" className="mt-1 w-9 h-9"/>    
            <img src="/menu2.png" alt="menu icon" className="mt-1 w-9 h-10"/>    
        </div>   
        </div>
        <div className="relative mt-40 ml-[20%]  max-w-170 w-[80%]">
        <h1 className={`relative ${spacegrotesk.className} font-regular text-[28px] mb-3`}>{Lines[0]}</h1>
        <h1 className={`relative ${spacegrotesk.className} font-light text-[12px] mb-12`}>{Lines[1]}</h1>
        <h1 className={`font-sans font-bold mb-16`}>{Lines[2]}</h1>
        <div className={`${montserrat.className} text-[16px] mb-12 leading-6`}><h2 className={`text-xl ${sansation.className} mb-3`}>Description</h2>{Lines[3]}</div>
        <div className={`${montserrat.className} text-[16px] mb-12`}>Model Details: <p className={`inline`}>{Lines[4]}</p></div>
        <div className={`${montserrat.className} text-[16px] mb-3`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>FIT</h1>{Lines[5]}</div>
        <div className={`${montserrat.className} text-[16px] mb-3`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>SIZE</h1>
        <div className="relative top-[3px] w-7 h-7 mr-5 inline-block"><input type="radio" id="radio1" name="radio1" className="radiobutton peer relative w-7 h-7" onChange={()=>setselectedState(0)} checked={selectedState === 0}/>
        <label htmlFor="radio1" className="absolute text-lg text-gray-800 top-0 peer-checked:font-semibold left-[8px]">S</label></div>
        <div className="relative top-[3px] w-7 h-7 mr-5 inline-block"><input type="radio" id="radio2" name="radio1" className="radiobutton peer relative w-7 h-7" onChange={()=>setselectedState(1)} checked={selectedState === 1}/>
        <label htmlFor="radio2" className="absolute text-lg text-gray-800 top-0 peer-checked:font-semibold left-[6px]">M</label></div>
        <div className="relative top-[3px] w-7 h-7 mr-5 inline-block"><input type="radio" id="radio3" name="radio1" className="radiobutton peer relative w-7 h-7" onChange={()=>setselectedState(2)} checked={selectedState === 2}/>
        <label htmlFor="radio3" className="absolute text-lg text-gray-800 top-0 peer-checked:font-semibold left-[8px]">L</label></div>
        </div>
        <div className={`${montserrat.className} text-[16px] mb-12`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>GENDER</h1>{Lines[6]}</div>

        <div className={`relative w-[90%] mb-12 h-15 flex justify-center items-center text-[16px] hover:border-gray-900/80 ${montserrat.className} border border-gray-700/80 rounded-sm`}>Add to Basket</div>
        <div className={`relative h-8 w-[90%] mb-3 cursor-pointer text-[16px] flex flex-row z-2 justify-between ${montserrat.className}`} onClick={() => SideViewFunc(1)}><h1>PRODUCT DETAIL & COMPOSITION</h1><h1>▼</h1></div>
        <div className={`relative h-8 w-[90%] mb-3 cursor-pointer text-[16px] flex flex-row z-2 justify-between ${montserrat.className}`} onClick={() => SideViewFunc(2)}><h1>DELIVERIES & RETURNS</h1><h1>▼</h1></div>
        <div className={`relative h-8 w-[90%] mb-3 cursor-pointer text-[16px] flex flex-row z-2 justify-between ${montserrat.className}`} onClick={() => SideViewFunc(3)}><h1>SPECIAL RETURN CONDITIONS</h1><h1>▼</h1></div>
     
        </div>
        <SideView Text={SideViewText} update={SideViewUpdate}/> 
        </div>)

}