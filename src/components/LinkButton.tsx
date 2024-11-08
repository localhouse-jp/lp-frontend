import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function LinkButton({ href, title }: { href: string, title: string }) {
  return <Link href={href} target="_blank"
    className="group mt-4 flex flex-row bg-black text-white font-bold p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
  >
    <p className="my-auto ml-3 mr-6 text-sm">{title}</p>
    <IoIosArrowForward className="w-8 h-8 p-2 bg-white text-black rounded-full transform transition-transform duration-300 group-hover:-translate-x-2" />
  </Link>
}