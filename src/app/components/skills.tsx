"use client";
import Image from "next/image";
import { useState } from "react";
type data1 = {
  icon: [];
  text: [];
};

export default function Skill({ data1 }: { data1: data1 }) {
  const [ontab, ActiveTAb] = useState("soft");
  const [activeTab, settab] = useState("soft");

  const Bgcolor = (act: any) => (ontab === act ? "bg-yellow" : "bg-grey");
  const { icon, text } = data1;
  return (
    <div>
      
      <div>
        <button className='h-full w-full  text-black text-4xl font-[poppins] border-4 border-b-slate-900 text-start px-2 bg-yellow'>
          SKILLS
        </button>
      </div>
      <ul className="flex flex-row flex-wrap content-start list-none py-4 gap-2 ">
        
        <li className=" bg-green-light text-lg py-2 px-4 w-fit flex gap-2 rounded-md">
          
          <Image src={"/html5.svg"} width={20} height={20} alt=""/> HTML-5
        </li>
        <li className=" bg-green-light text-lg py-2 px-4 w-fit flex gap-2 rounded-md">
          
        <Image src={"/javascript.svg"} width={20} height={20} alt=""/> JAVASCRIPT
        </li>
        <li className=" bg-green-light text-lg py-2 px-4 w-fit flex gap-2  rounded-md">
          
          <Image src={"/typescript.svg"} width={20} height={20} alt=""/> TYPESCRIPT
        </li>
        <li className=" bg-green-light text-lg py-2 px-4 w-fit flex gap-2  rounded-md">
          
          <Image src={"/tw.svg"} width={20} height={20} alt=""/> TAILWINDCSS
        </li>
        <li className=" bg-green-light text-lg py-2 px-4 w-fit flex gap-2 rounded-md">
          
        <Image src={"/nextjs.svg"} width={20} height={20} alt=""/> NEXT 13
        </li>
       
      </ul>
    </div>
  );
}
