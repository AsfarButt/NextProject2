"use client";

export default function MyImage({itemname}:{itemname: string}){

    const Outfits = [`/Outfit-M/${itemname}/pic1.webp`,
                    `/Outfit-M/${itemname}/pic2.webp`,
                    `/Outfit-M/${itemname}/pic3.webp`,
                    `/Outfit-M/${itemname}/pic4.webp`,
                    `/Outfit-M/${itemname}/pic5.webp`,
                    `/Outfit-M/${itemname}/pic6.webp`,
                    `/Outfit-M/${itemname}/pic7.jpg`];

    function ItScrolled(e: React.UIEvent<HTMLDivElement>){

        }


    return(<div className="scrollableelement relative min-w-130 w-[70%] h-200 bg-white border border-black flex flex-col overflow-y-scroll" onScroll={(e) => ItScrolled(e)}>
        <div className="relative">
             {Outfits.map((element) => (<img className="relative flex-none w-full h-200 pointer-events-none border borderblack/80" key={element} src={element} alt={element}/>))} 
        </div>
    </div>)
}