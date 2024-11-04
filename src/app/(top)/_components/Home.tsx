'use client'
import LOCALHOUSE_Background from "#/assets/LOCALHOUSE_Background.svg";
import SuperTechEngineerHouse from "#/assets/SuperTechEngineerHouse.svg";
import Sample01 from "#/assets/sample01.png";
import { LinkButton } from "@/app/_components/LinkButton";
import Image from 'next/image';

export default function Home() {
  return (
    <div id="home">
      <div className="absolute w-full z-0 p-12 overflow-hidden">
        <Image src={LOCALHOUSE_Background.src} alt={""} width={512} height={16} className="sm:w-[70%] md:min-w-[800px] " />
      </div>
      <div className="p-8 md:p-12 flex justify-between flex-wrap">
        <div className="flex flex-col md:gap-12 gap-4 md:mt-28 mt-20 z-10">
          <Image src={SuperTechEngineerHouse.src} alt={""} width={512} height={16} className="sm:w-[70%] md:max-w-[520px] md:min-w-[320px]" />
          <p>自由と創造性を追求する、学生ITエンジニアのためのオープンコミュニティ</p>
        </div>


        <div className="flex flex-col text-right md:mt-28 mt-20 ml-auto z-10">
          <p className="font-bold">大阪府東大阪市</p>
          <p className="font-bold">HIGASHI-OSAKA, OSAKA</p>
          <LinkButton href="https://localhouse.connpass.com" title="イベント情報を見る" />
        </div>
      </div>

      <Image src={Sample01.src} alt={""} width={512} height={16} className="md:w-full hidden md:flex sm:w-[320%] md:p-10 sm:px-0 sm:py-4 md:mt-[-48px] relative z-10" />
    </div>
  );
}