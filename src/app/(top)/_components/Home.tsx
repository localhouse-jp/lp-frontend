'use client'
import Sample02 from "#/assets/sample02.jpeg";
import Sample02_sm from "#/assets/sample02_sm.jpeg";
import { ForegroundText } from "@/app/_components/ForegroundText";
import { BackgroundText } from "@/components/BackgroundText";
import { LinkButton } from "@/components/LinkButton";
import Image from 'next/image';

export default function Home() {
  return (
    <div id="home">
      <div className="absolute top-17 z-0">
        <Image src={Sample02.src} alt={""} width={512} height={16} className="hidden lg:block h-screen max-h-[1280px] w-screen object-cover relative top-0 left-0 right-0" />
        <Image src={Sample02_sm.src} alt={""} width={512} height={16} className="lg:hidden h-screen max-h-[800px] w-screen object-cover relative top-0 left-0 right-0" />
      </div>
      <div className="backdrop-blur-sm bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] px-8 lg:px-16 h-screen lg:max-h-[1280px] max-h-[800px]">
        <div className="max-h-[800px] mx-auto">
          <div className="absolute z-0 pt-28 overflow-hidden">
            <BackgroundText />
          </div>
          <div className="px-4 pt-32 lg:pt-32 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex flex-col lg:gap-12 gap-4 lg:mt-8 z-10">
              <ForegroundText />
              <p>自由と創造性を追求する、<wbr />学生ITエンジニアのための<wbr />オープンコミュニティ</p>
            </div>

            <div className="flex flex-col text-right z-10 bottom-20 right-4 absolute md:static md:justify-center items-end flex-shrink-0">
              <p className="font-bold">大阪府東大阪市中小阪3-10-13</p>
              <p className="font-bold">3-10-13 NAKAKOSAKA HIGASHI-OSAKA, OSAKA</p>
              <LinkButton href="https://localhouse.connpass.com" title="イベント情報を見る" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}