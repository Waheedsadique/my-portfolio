import Image from "next/image";
import Link from "next/link";

type prop = {
  name: string;
  role: string;
  education: string;
  contactLinks: string[];
};
export default function SideBar({ data }: { data: prop }) {
  const { name, role, education, contactLinks } = data;
  return (
    <div className=" bg-[#191A19]  flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed ">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          width={150}
          height={150}
          className="rounded-3xl h-full mb-6"
          src="/wah.png"
          alt=""
        />
        <h1 className="mb-2 font-[Oswald] text-[#FFF734] text-4xl  ">{name}</h1>
        <h2 className="mb-8 font-[Oswald] text-2xl">{role}</h2>
        <p className="mb-2 text-base sm:text-lg font-[Oswald]">{education}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2 font-[Oswald] text-lg"> CONTACT ME</h3>

          <div className="flex flex-row justify-center gap-2 bg-[#191A19]">
            <Link className="text-2xl m-2" href={contactLinks?.[0]}>
              <Image
                src={"/twitter.svg"}
                width={30}
                height={30}
                alt=""
                className=" rounded-lg "
              />
            </Link>
            <Link className="text-2xl m-2" href={contactLinks?.[1]}>
              <Image
                src={"/mail.svg"}
                width={30}
                height={30}
                alt=""
                className=" rounded-lg "
              />
            </Link>
            <Link className="text-2xl m-2 " href={contactLinks?.[2]}>
              <Image
                src={"/fb.svg"}
                width={30}
                height={30}
                alt=""
                className=" rounded-lg "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
