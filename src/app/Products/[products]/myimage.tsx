
export default function MyImage({itemname}:{itemname: string}){

    const Outfits = [`/Outfit-M/${itemname}/pic1.webp`,
                    `/Outfit-M/${itemname}/pic2.webp`,
                    `/Outfit-M/${itemname}/pic3.webp`,
                    `/Outfit-M/${itemname}/pic4.webp`,
                    `/Outfit-M/${itemname}/pic5.webp`,
                    `/Outfit-M/${itemname}/pic6.webp`,
                    `/Outfit-M/${itemname}/pic7.jpg`];

    return(<div className="scrollableelement relative min-w-160 w-[80%] mr-[2px] h-280 bg-white flex flex-col overflow-y-scroll">
        <div className="relative">
             {Outfits.map((element) => (<img className="relative flex-none w-full h-280 pointer-events-none" key={element} src={element} alt={element}/>))} 
        </div>
    </div>)
}