import MyDescription from "./mydescription";
import MyImage from "./myimage";
import EmailApply from "./emailapply";
import Footer from "./footer";
import fs from "fs";
import path from "path";
import {Prata} from "next/font/google";

const cormorant = Prata({
    subsets:['latin'],
    weight: ['400']
})

export default async function Products({ params }: { params: { products: string } }) {  

  const FilePath = await path.join(process.cwd(),"public","Outfit-M",params.products,"text.txt");
  const FileContent = await fs.promises.readFile(FilePath,"utf8");

  //Do this make it a clone of outfitters 
  return (
    <div className="mainbody relative w-screen h-screen overflow-y-scroll">
      <div className="relative w-full h-auto flex flex-col justify-center text-xl items-center">
      <div className="relative w-full h-auto flex flex-row">
        {/* Image Section */}
        <div className="relative w-[47%] h-360 flex justify-end items-end">
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
      <EmailApply />
      {/* Footer */}
      <div className="relative w-full h-auto">
      <Footer />
      </div>

    </div>
    </div>
  );
}

