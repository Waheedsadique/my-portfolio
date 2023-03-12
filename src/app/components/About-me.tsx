import { skills , personalData} from "../data/date";
import Skill from "./skills";
import Image from "next/image";



type prop ={
    title:string;
    body:string[];
    
}


export default function Aboutme({ data  }: { data: prop   }){

    const { title,body } = data;
    
    return(
        <section className="mb-10 ">
        <div>
            <h2 className="mb-8 font-[poppins] text-4xl border-4 border-b-slate-900 bg-yellow">{title}</h2>
            <p className="mb-6 text-base sm:text-lg font-[Oswald] px-2 border-2 border-b-slate-900">{body[0]}</p>
            <p className="mb-6 text-base sm:text-lg font-[Oswald] px-2 border-2 border-b-slate-900">{body[1]}</p>
            
        </div>
        <Skill data1={{
                icon: [],
                text: []
            }} />
            	
        </section>
    )

};