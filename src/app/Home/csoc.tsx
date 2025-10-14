"use client";
import {useRouter} from "next/navigation";

export default function CSOC({index}:{index: number}){
        const router = useRouter();

    function RedirectFunction(){
        console.log("item",index+1,"redirect");
        router.push(`./Products/item${index+1}`);
    }

    return(<div className="absolute z-2 w-full h-full cursor-pointer" onClick={RedirectFunction}>

    </div>)
}