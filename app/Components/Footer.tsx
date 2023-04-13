//'use client'
import RainbowSocialWallets from "../wallet/page";
import walletPng from '../../public/wallet.png'
import Image from "next/image";

export default function Footer(){
    return (
        
        <div className=" h-[170px] self-center w-auto flex flex-col md:flex md:flex-row justify-around items-center ">
            <div className=" h-auto flex sm:w-auto lg:max-w-[60%] text-lg md:text-2xl text-gray-200">
                <div className="">
                    <div className=" inline-flex"><div className=" flex max-w-[60%] text-sky-400">Create&nbsp;</div> your own wallet with your&nbsp;</div>
                    <div className=" ml-5 flex justify-end text-sky-400">Social Media Accounts</div>
                </div>
                <Image className=" animate-bounce ml-10" src={walletPng} alt="wallet" width={50} height={50} />
            </div>
            
            <div className=" h-fit block ">
                <RainbowSocialWallets/>
            </div>
        </div>
        
    )
}