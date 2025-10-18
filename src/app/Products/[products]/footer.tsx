import {Cormorant_Garamond} from "next/font/google";

const cormorantgaramond = Cormorant_Garamond({
  subsets:['latin'],
  weight:['400','500']
})

export default function Footer(){


    return(<div className="w-full h-100 flex justify-between bg-black">
        <div className="relative pt-13 pl-8 flex flex-col gap-1.5 text-[18px] text-white/80 border-box font-semibold">
        <h1>FAQ&apos;S</h1>
        <h1>Log In/Sign Up</h1>
        <h1>How To Buy</h1>
        <h1>Payment</h1>
        <h1>Shipping & Deliveries</h1>
        <h1>Exchange & Returns</h1>
        </div>
        <div className="text-center mt-10">
        <h1 className={`${cormorantgaramond.className} text-white/95 text-8xl`}>Vionne</h1>
        <h2 className="relative top-35 text-white/80 text-[16px]">WHERE FASHION MEETS CLASS</h2>
        </div>
        <div className="relative text-right pt-13 pr-8 flex flex-col gap-2 text-[18px]] text-white/80 border-box font-semibold">
        <h1>About Us</h1>
        <h1>Retail Stores</h1>
        <h1>Contact Us</h1>
        <h1>Work With Us</h1>
        </div>
    </div>)
}
