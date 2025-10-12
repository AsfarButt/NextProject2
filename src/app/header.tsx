import {STIX_Two_Text} from "next/font/google";
import {Prata} from "next/font/google";

const cormorant = Prata({
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
})

const newsreader = STIX_Two_Text({
    subsets:[ 'latin'],
    weight: '400',
    style: 'normal'
})


export default function Header({className}: {className:string}){


    return(<div className={`${className} w-full h-18 bg-inherit flex justify-between items-center px-6 border-box`}>

        {/* Left Side */}
        <div className="relative flex flex-row items-center bg-white mix-blend-difference [-webkit-background-clip:text]">
        <div className="relative w-10 h-10 [mask-image:url('/Vionne1.png')] [mask-repeat:no-repeat] [mask-size:cover] bg-center 
        bg-inherit" />
        <div className={`${cormorant.className} pt-1 text-[26px] text-transparent [background-clip:text]
         [-webkit-text-fill-color:transparent] bg-cover bg-inherit`}>VIONNE</div>
        </div>

        {/* Right Side */}
        <div className="relative flex flex-row flex-shrink-0 gap-3">
            <div className="relative flex-shrink-0 w-10 h-10 flex justify-center items-center rounded-full bg-black/90 border border-white/80">
            <div className="w-4 h-4 bg-white [mask-image:url('/square2.png')] [mask-size:cover]" />
            </div>
            <div className="relative flex-shrink-0 w-10 h-10 flex justify-center items-center rounded-full bg-black/90 border border-white/80">
            <div className="w-2/5 h-2/5 bg-white [mask-image:url('/bag.png')] [mask-size:cover]" />
            </div>
            <div className="relative flex-shrink-0 h-10 w-24 flex items-center border 
            overflow-hidden border-white/80 rounded-full bg-black/90">
                <div className="w-6 h-6 mx-1 flex-shrink-0 flex justify-center items-center rounded-full  bg-white/40">
                <div className="w-3 h-3 bg-white [mask-image:url('/square.png')] [mask-size:cover]"/></div>
                <div className=" text-white/90 text-sm">Connect</div>
            </div>
        </div>
   </div>)
}