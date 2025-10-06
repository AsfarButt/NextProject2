



export default function Scroller2(){

    const Outfits = [
    ["/Outfit-M/outfit1.png", "Classic White Tee", "$18"],
    ["/Outfit-M/outfit2.png", "Black Graphic Tee", "$22"],
    ["/Outfit-M/outfit3.png", "Vintage Wash Tee", "$25"],
    ["/Outfit-M/outfit4.png", "Striped Cotton Tee", "$20"],
    ["/Outfit-M/outfit5.png", "Oversized Streetwear Tee", "$28"],
    ["/Outfit-M/outfit6.png", "Minimal Logo Tee", "$24"],
    ["/Outfit-M/outfit7.png", "Heather Grey Crewneck", "$19"],
    ["/Outfit-M/outfit8.png", "Retro Print Tee", "$27"],
    ["/Outfit-M/outfit9.png", "Longline Urban Tee", "$26"],
    ["/Outfit-M/outfit10.png", "Pocket Tee", "$21"],
    ["/Outfit-M/outfit11.png", "Tie-Dye Tee", "$23"],
    ["/Outfit-M/outfit12.png", "Athletic Fit Tee", "$30"],                      //Start with this do whatever is right as you go
    ];


    return(<div className="relative w-screen h-55 flex justify-center bg-black/40">
        <div className="relative w-410 h-full bg-blue-600/70 flex flex-row">
            {Outfits.map((element, index) => 
                (<div className="relative h-full flex-none flex flex-col w-82 bg-gray-950/80 overflow-hidden" key={index}>
                    <img src={element[0]} className="relative w-full top-[-38px]"/>
                    <div className="absolute bottom-0 h-[50%] w-full bg-blue-200 brightness-50"><h1>{element[1]}</h1>{element[2]}</div>
                </div>))}
        </div>
    </div>)
}