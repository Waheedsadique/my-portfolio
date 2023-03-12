import Image from "next/image"

export default function Footer() {
    return(
        <div className="text-center p-6 bg-black text-white flex space-x-2 justify-center border border-b-2 border-red-700">
        <span className="text-red-800 font-semibold" text-red-800>©  Copyright </span>
        <span
          className="text-red-800 font-semibold"
          
        >
           by Muhammad Waheed
        </span>
        {/* <Image src={"/wah.png"} height={20} width={30} alt="waheed" className="rounded-full"/> */}
      </div>
        )
    
}