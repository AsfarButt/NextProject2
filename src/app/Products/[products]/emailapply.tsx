"use client";
import {Space_Grotesk} from "next/font/google";

const spacegrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:'400'
})

export default function EmailApply(){

    function SubmitFunc(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
        console.log("it worked");
    }

    return(<div className={`relative w-full h-60 mb-20 flex flex-col justify-center items-center ${spacegrotesk.className}`}>
      <h1 className="text-[24px] text-black/90">Get the latest trends first</h1>
      <div className="relative w-[60%] max-w-160 h-18 flex border-b border-black/90">
        <form className="" onSubmit={(e)=>SubmitFunc(e)}>
            <input type="email" id="email" placeholder=" " required className="input1 mt-7 ml-2 text-[18px] text-black/80 focus:outline-none w-[90%] h-[80%] peer/input" />
            <label className="label1 absolute left-0 w-full h-full transition-all duration-300 ease-in-out text-center border-box pt-7 peer/label text-gray-700/70" htmlFor="email">Enter your email</label>
            <button type="submit" className="absolute right-2 top-9 hover:block cursor-pointer peer-hover/label:block peer-placeholder-shown/input:hidden z-1">→</button>    
        </form>          
         {/* copy the outfitters website button and do it exactly here also send a email to host if user pushes his  */}
      </div>
      <div className="relative w-[50%] mt-3 flex justify-between h-10 max-w-130 text-black/80">
      <span className="text-lg hover:text-black"> Facebook </span>|
      <span className="text-lg hover:text-black"> Twitter </span>|
      <span className="text-lg hover:text-black"> Instagram </span>|
      <span className="text-lg hover:text-black"> Pinterest </span>
      </div>
      </div>)
}