
import MyImage from "./myimage";


export default async function Products({ params }: { params: { products: string } }) {   
  
  // const text = await 
  
  //Do this make it a clone of outfitters 
  return (
    <div className="w-screen h-auto bg-black/20 flex flex-col justify-center text-xl items-center">
      
      <div className="relative w-full h-full flex flex-row">
        <div className="relative w-[40%] h-300 bg-red-400/30 flex justify-end items-center">
        {/* <h1 className="absolute">Image section</h1> */}
        <MyImage itemname={params.products} />
        </div>
        <div className="relative w-[60%] h-300 bg-blue-500/30"><h1>Description Section</h1>
        {/* Description */}
        </div>
      </div>
      <div className="relative w-full h-70 bg-black/30">Footer</div>

    </div>
  );
}