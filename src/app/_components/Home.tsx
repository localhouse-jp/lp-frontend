'use client'
import Sample01 from "#/assets/sample01.png";
import Image from 'next/image';
import { LinkButton } from "./LinkButton";
import {BackgroundText} from "@/components/BackgroundText";
import {ForegroundText} from "@/app/_components/ForegroundText";

export default function Home() {
  return (
    <div className="">
      <div className="absolute z-0 mx-4 lg:mx-10 overflow-hidden">
        <BackgroundText/>
      </div>
      <div className="p-8 lg:p-12 flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col lg:gap-12 gap-4 lg:mt-8 z-10">
          <ForegroundText/>
          <p>自由と創造性を追求する、<wbr/>学生ITエンジニアのための<wbr/>オープンコミュニティ</p>
        </div>


        <div className="flex flex-col text-right z-10 md:justify-center items-end flex-shrink-0">
          <p className="font-bold">大阪府東大阪市</p>
          <p className="font-bold">HIGASHI-OSAKA, OSAKA</p>
          <LinkButton href="https://localhouse.connpass.com" title="イベント情報を見る" />
        </div>
      </div>

      <Image src={Sample01.src} alt={""} width={512} height={16} className="md:w-full hidden md:flex sm:w-[320%] md:p-10 sm:px-0 sm:py-4 md:mt-[-48px] relative z-10" />
    </div>
  );
}