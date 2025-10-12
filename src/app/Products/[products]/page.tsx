import MyDescription from "./mydescription";
import MyImage from "./myimage";
import fs from "fs";
import path from "path";

export async function TextGetter(){

}

export default async function Products({ params }: { params: { products: string } }) {   
  const FilePath = path.join(process.cwd(),"public","Outfit-M",params.products,"text.txt");
  const FileContent = await fs.promises.readFile(FilePath,"utf8");
  let MyText = "";

  //Do this make it a clone of outfitters 
  return (
    <div className="relative w-screen h-auto">
      <div className="relative w-full h-full bg-black/20 flex flex-col justify-center text-xl items-center">
      
      <div className="relative w-full h-full flex flex-row">
        {/* Image Section */}
        <div className="relative w-[47%] h-300 bg-red-400/30 flex justify-end items-center border-r border-gray-400/80">
          <MyImage itemname={params.products} />
        </div>
        {/* Description Section */}
        <div className="relative w-[53%] h-300 bg-blue-500/30">
          <MyDescription text={FileContent}/>
        </div>
      </div>
      <div className="relative w-full h-70 bg-black/30">Footer</div>

    </div>
    </div>
  );
}

