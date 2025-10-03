import {STIX_Two_Text} from "next/font/google";

const newsreader = STIX_Two_Text({
    subsets:[ 'latin'],
    weight: '400',
    style: 'normal'
})


export default function Header({className}: {className:string}){


    return(<div className={`${className} w-full h-18 shadow-lg bg-black flex justify-between items-center px-6 border-box`}>

        {/* Left Side */}
        <div className="relative flex flex-row items-center bg-white mix-blend-difference [-webkit-background-clip:text]">
        <div className="relative w-8 h-8 [mask-image:url('/Vionne1.png')] [mask-repeat:no-repeat] [mask-size:cover] bg-center 
        bg-inherit" />
        <div className={`${newsreader.className} pt-1 text-[24px] text-transparent [background-clip:text]
         [-webkit-text-fill-color:transparent] bg-cover bg-inherit`}>VIONNE</div>
        </div>

        {/* Right Side */}
        <div className="">
            <div className="relative w-8 h-8 flex justify-center items-center rounded-full border border-white">
            <div className="w-3 h-3 bg-white [mask-image:url('/bag.png')] [mask-size:cover]" />
            </div>
            <div className="">
                <div className=""></div>
                <div className=""></div>
                    {/* //start from here  the connect icon from the reel mistidue*/}
            </div>
        </div>

    </div>)
}