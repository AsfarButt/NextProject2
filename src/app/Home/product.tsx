import CSOC from "./csoc";


export default function Product({proddescription, sentindex}:{proddescription: string[], sentindex: number}){

    const imageurl = proddescription[0];

    return(<div className="relative flex-auto w-[25%] min-w-90 aspect-[2/3] flex flex-col justify-center items-center border
     border-black/50 overflow-hidden">
        <img className={`relative flex-none w-auto h-[80%]`} src={proddescription[0]} alt={proddescription[0]} />
        <div className="relative pl-3 pt-2 flex-none h-[20%] w-full bg-white text-black/90 border-t border-black border-box">
            <h2 className="text-[20px] leading-6">{proddescription[1]}</h2>
            <h3 className="text-[14px] text-gray-600/80">{proddescription[2]}</h3>
            <h1 className="mt-2 text-[20px]">{proddescription[3]}</h1>
        </div>
        <CSOC index={sentindex}/>
    </div>)
}   

