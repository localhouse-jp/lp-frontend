// import HackbarLogo from "#/assets/Sponsor/hackbar.png";
// import TasukiLogo from "#/assets/Sponsor/tasuki.svg";
import TitlePin from "@/app/_components/TitlePin";
// import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-8" id="sponsors">
      <div className="flex">
        <TitlePin title="Sponsors"/>
      </div>
      <div className={"flex flex-col gap-4"}>
        <p className="md:text-2xl text-xl font-bold">スポンサー</p>

        <div className="flex flex-warp gap-8">
          {/*<Link href="https://tasuki-holdings.co.jp/" target="_blank"
                className="bg-slate-50 text-black rounded-xl px-8 py-4 duration-500 hover:scale-[110%] hover:shadow-lg">
            <p className="text-sm">協賛企業 2024年~</p>
            <p className="font-bold text-lg">株式会社タスキホールディングス様</p>
            <Image src={TasukiLogo.src} alt={""} width={512} height={16} className="sm:w-[70%] md:w-64 mx-auto"/>
          </Link>*/}
        </div>

        <hr className="h-0.5 bg-neutral-100 dark:bg-white/10"/>

        <div className="flex flex-wrap md:gap-4 gap-2 md:justify-start justify-center">
          {/*<Link href="https://hackbar.jp/" target="_blank"
                className="bg-slate-50 text-black rounded-xl p-4 duration-500 hover:scale-[102%] hover:shadow-lg">
            <p className="text-xs">フレンドシップスポンサー</p>
            <p className="font-bold text-md">HACK.BAR様</p>
            <Image src={HackbarLogo.src} alt={""} width={512} height={12}
                   className="w-36 md:w-44 h-8 object-cover mx-auto mix-blend-difference"/>
          </Link>*/}

          <Link href="https://starthype.co.jp" target="_blank"
                className="bg-slate-50 text-black rounded-xl p-4 duration-500 hover:scale-[102%] hover:shadow-lg">
            <p className="text-xs">運営</p>
            <p className="font-bold text-md">STARTHYPE, Inc.</p>
            <p className="w-36 md:w-44 mx-auto text-xs">代表取締役 廣瀬悠人<br/>近畿大学情報学部在学中</p>

          </Link>
        </div>

      </div>
      <div className={"flex flex-col gap-4"}>
        <p className="font-bold md:text-base text-sm">個人でご支援くださった皆様(敬称略・順不同)</p>
        <div className="w-32 flex flex-warp gap-4">
          <PrivateSponsor name="HIROSSY" href="" />
        <PrivateSponsor name="ひろせファーム" href="http://hirose-f.com" />
        <PrivateSponsor name="加藤 翔" href=""/>
        </div>

      </div>
      <div className="flex justify-center">
        <Link href={"https://donate.stripe.com/aEU2cdayq8194RqeUU"}
              className="transition duration-100 hover:opacity-80 bg-grass-11 text-black px-8 py-2 rounded grid place-items-center">
          応援できるボタン ☕
        </Link>
      </div>
    </div>
  );
}

function PrivateSponsor({name, href}: { name: string, href?: string }) {
  return href ? (
    <Link href={href} target="_blank"
          className="bg-slate-50 text-black rounded-xl px-8 py-4 font-bold my-auto text-nowrap duration-500 hover:opacity-80 hover:scale-[110%] hover:shadow-lg">{name}</Link>
  ) : <p className="bg-slate-50 text-black rounded-xl px-8 py-4 font-bold my-auto text-nowrap duration-500 hover:opacity-80 hover:scale-[110%] hover:shadow-lg">{name}</p>;
}