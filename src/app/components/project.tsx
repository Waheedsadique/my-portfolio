import Link from "next/link";
import { skills , personalData ,ProjectData} from "../data/date";




type prop2 ={
    title:string;
    MyProject:{role: string; link: string; current: boolean;}[];
    
}


export default function Project({ data  }: { data: prop2   }){

    const { title,MyProject } = data;
    
    return(
        <section>
			<h2 className='mb-6 text-4xl bg-yellow border-4 border-b-slate-900 font-[poppins]'> {title}</h2>
			<div className='flex flex-col gap-6'>
				{MyProject.map(({ role, link, current }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
						<div className='bg-grey-light p-6 drop-shadow-md'>
							<h3 className="text-2xl py-4">{role}</h3>
							<Link href="https://panaverse-co.vercel.app/" className='mt-2 border-2 border-t-black bg-green-light p-1 py-2'>{link}</Link>
							
						</div>
					</div>
				))}
			</div>
		</section>
    )

};