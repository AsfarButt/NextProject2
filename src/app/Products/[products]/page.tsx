import MyDescription from "./mydescription";
import MyImage from "./myimage";
import Footer from "./footer";
import fs from "fs";
import path from "path";
import {Prata, Space_Grotesk} from "next/font/google";

const cormorant = Prata({
    subsets:['latin'],
    weight: ['400']
})

const spacegrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:'400'
})

export default async function Products({ params }: { params: { products: string } }) {  

  const FilePath = await path.join(process.cwd(),"public","Outfit-M",params.products,"text.txt");
  const FileContent = await fs.promises.readFile(FilePath,"utf8");

  //Do this make it a clone of outfitters 
  return (
    <div className="relative w-screen h-auto">
      <div className="relative w-full h-460 flex flex-col justify-center text-xl items-center">
      <div className="relative w-full h-auto flex flex-row">
        {/* Image Section */}
        <div className="relative w-[47%] h-360 flex justify-end items-end border-r border-gray-400/80">
          <div className={`absolute top-4 left-6 text-4xl font-regular flex ${cormorant.className}`}>
            <img src='/Vionne1.png' alt="vionne_img" className="relative w-10 h-10"/>
            Vionne</div>
          <MyImage itemname={params.products} />
        </div>
        {/* Description Section */}
        <div className="relative w-[53%] h-360">
          <MyDescription text={FileContent}/>
        </div>
      </div>
      <div className={`relative w-full h-35 flex flex-col justify-center items-center ${spacegrotesk.className} bg-black/20`}>
      <h1 className="text-[24px] text-black/80">Get the latest trends first</h1>
      <div className="relative flex">
        <label htmlFor="email"></label>
        <input type="email" name="email" className="w-[90%]" />
        <button className=""></button>              
         {/* copy the outfitters website button and do it exactly here also send a email to host if user pushes his  */}
      </div>
      </div>
      {/* Footer */}
      <div className="relative w-full h-70">
      <Footer />
      </div>

    </div>
    </div>
  );
}

