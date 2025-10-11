"use client";
import React,{useRef, useState, useEffect} from "react";
import {Space_Grotesk, Montserrat, Sansation} from "next/font/google";

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

    const ButtonRef = useRef([]);

    function RadioChange(index: number){

    }

    return(<div className="relative mt-40 ml-[20%]  max-w-170 w-[80%]">
        <h1 className={`relative ${spacegrotesk.className} font-regular text-[28px] mb-3`}>{Lines[0]}</h1>
        <h1 className={`relative ${spacegrotesk.className} font-light text-[12px] mb-12`}>{Lines[1]}</h1>
        <h1 className={`font-sans font-bold mb-16`}>{Lines[2]}</h1>
        <div className={`${montserrat.className} text-[16px] mb-12 leading-6`}><h2 className={`text-xl ${sansation.className} mb-3`}>Description</h2>{Lines[3]}</div>
        <div className={`${montserrat.className} text-[16px] mb-12`}>Model Details: <p className={`inline`}>{Lines[4]}</p></div>
        <div className={`${montserrat.className} text-[16px] mb-3`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>FIT</h1>{Lines[5]}</div>
        <div className={`${montserrat.className} text-[16px] mb-3`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>SIZE</h1>
        <div className="relative w-7 h-7 mr-5 inline-block" onClick={() => RadioChange(0) ref={el => el = ButtonRef.current[0]}}><h2 className="absolute text-lg top-2 left-[14px] z-0">S</h2></div>
        <div className="relative w-7 h-7 mr-5 inline-block" onClick={() => RadioChange(1) ref={el => el = ButtonRef.current[1]}}><h2 className="absolute text-lg top-2 left-[13px] z-0">M</h2></div>
        <div className="relative w-7 h-7 mr-5 inline-block" onClick={() => RadioChange(2) ref={el => el = ButtonRef.current[2]}}><h2 className="absolute text-lg top-2 left-[16px] z-0">L</h2></div>
        </div>
        <div className={`${montserrat.className} text-[16px] mb-3`}><h1 className={`font-semibold text-[20px] font-sans inline mr-8`}>GENDER</h1>{Lines[6]}</div>
    </div>)

}