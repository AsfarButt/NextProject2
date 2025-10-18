"use client";4
import React,{useState, useEffect} from "react";
import Product from "./product";
import Footer from '../Products/[products]/footer';
import {Prata} from "next/font/google";

const prata = Prata({
    subsets:['latin'],
    weight:'400'
})

export default function Home(){

    const [ProductsData, setProductsData] = useState([]);
    async function GetData(){
        const data = await fetch('/Outfit-M/textfile.json').then((res) => res.json());
        setProductsData(data);
        console.log(ProductsData);
    }
    useEffect(() => {
        GetData();
    },[])

    return(<div className="homeboy relative w-screen h-screen bg-white/95 overflow-y-scroll overflow-x-hidden">
            <div className="relative w-full h-60 bg-white/95">
                <div className="relative pt-6 pl-6 flex flex-row items-center bg-white border-box">
                <img className="relative w-10 h-10" src="/Vionne1.png" alt="Vionne1.png"/>
                <div className={`${prata.className} pt-1 text-[26px] bg-cover bg-inherit`}>VIONNE</div>
                {/* Add the search bar here with the fixed position and 3 icons search(doesnot work) people(doesnot work) and shopping cart */}     
                </div>
                <div className="fixed top-0 w-full h-20 z-5">
                <div className="absolute right-[6%] mt-6 flex gap-[15%]">
                    <img src="/Home.png" alt="home icon" className="w-10 h-10"/>    
                    <img src="/search.png" alt="search icon" className="mt-1 w-9 h-9"/>    
                    <img src="/menu2.png" alt="menu icon" className="mt-1 w-9 h-10"/>    
                </div>   
                </div>  
            </div>
        {/* MainProducts */}
        <div className="relative w-screen h-auto mb-60 flex flex-row border-t border-black/50 flex-wrap">
        {ProductsData.map((element, index) => (
            <Product proddescription={element} sentindex={index} key={index}/>
        ))}
     </div>
    <Footer />
    </div>)
}