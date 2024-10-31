
import LOCALHOUSE_Background from "#/assets/LOCALHOUSE_Background.svg";
import SuperTechEngineerHouse from "#/assets/SuperTechEngineerHouse.svg";
import Sample01 from "#/assets/sample01.png";


import Image from 'next/image';
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-0 m-12 overflow-hidden">
      <Image src={LOCALHOUSE_Background.src} alt={""} width={512} height={16} className="sm:w-[70%] md:max-w-[820px] md:min-w-[320px] " />
      </div>
      <div className="p-8 md:p-12 flex justify-between flex-wrap">
        <div className="flex flex-col md:gap-12 gap-4 mt-28 z-10">
          <Image src={SuperTechEngineerHouse.src} alt={""} width={512} height={16} className="sm:w-[70%] md:max-w-[520px] md:min-w-[320px]" />
          <p>自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ</p>
        </div>


        <div className="flex flex-col text-right mt-28 ml-auto z-10">
          <p className="font-bold">大阪府東大阪市</p>
          <p className="font-bold">HIGASHI-OSAKA, OSAKA</p>
          <Link href="https://localhouse.connpass.com" target="_blank"
            className="group mt-4 flex flex-row bg-black text-white font-bold p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <p className="my-auto ml-3 mr-6 text-sm">イベント情報を見る</p>
            <IoIosArrowForward className="w-8 h-8 p-2 bg-white text-black rounded-full transform transition-transform duration-300 group-hover:-translate-x-2" />
          </Link>
        </div>
      </div>

      <Image src={Sample01.src} alt={""} width={512} height={16} className="md:w-full hidden md:flex sm:w-[320%] md:p-10 sm:px-0 sm:py-4 md:mt-[-48px] relative z-10" />
    </div>
  );
}