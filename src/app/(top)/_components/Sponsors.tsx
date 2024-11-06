import HackbarLogo from "#/assets/Sponsor/hackbar.png";
import TasukiLogo from "#/assets/Sponsor/tasuki.svg";
import TitlePin from "@/app/_components/TitlePin";
import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="mx-auto max-w-[1400px] justify-center" id="sponsors">
      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>

      <div className="flex md:ml-32">
        <TitlePin title="Sponsors" />
      </div>
      <p className="md:text-2xl text-xl p-4 font-bold md:ml-32">スポンサー</p>

      <div className="flex flex-warp gap-4 md:mx-32 m-6">
        <Link href="https://tasuki-holdings.co.jp/" target="_blank" className="bg-slate-50 rounded-xl px-8 py-4 duration-500 hover:scale-[110%] hover:shadow-lg">
          <p className="text-sm">協賛企業 2024年~</p>
          <p className="font-bold text-lg">株式会社タスキホールディングス様</p>
          <Image src={TasukiLogo.src} alt={""} width={512} height={16} className="sm:w-[70%] md:w-64 mx-auto" />
        </Link>
      </div>

      <hr className="md:mx-32 my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className="flex flex-wrap md:gap-4 gap-2 md:mx-32 my-4 md:justify-start justify-center" >
        <Link href="https://hackbar.jp/" target="_blank" className="bg-slate-50 rounded-xl p-4 duration-500 hover:scale-[102%] hover:shadow-lg">
          <p className="text-xs">フレンドシップスポンサー</p>
          <p className="font-bold text-md">HACK.BAR様</p>
          <Image src={HackbarLogo.src} alt={""} width={512} height={12} className="w-36 h-8 object-cover mx-auto mix-blend-difference" />
        </Link>

        <Link href="https://starthype.co.jp" target="_blank" className="bg-slate-50 rounded-xl p-4 duration-500 hover:scale-[102%] hover:shadow-lg">
          <p className="text-xs">運営</p>
          <p className="font-bold text-md">スタートハイプ株</p>
          <p className="w-36 mx-auto text-xs">代表取締役 廣瀬悠人<br/>近畿大学情報学部在学中</p>

        </Link>
      </div>

      <p className="font-bold md:mx-32 md:mt-16 mx-6 md:text-base text-sm">個人でご支援くださった皆様(敬称略・順不同)</p>
      <div className="md:my-6 my-4 w-32 flex flex-warp gap-4 md:ml-32 mx-4">
        <PrivateSponsor name="ヒロッシー" href="https://twitter.com/hirossy" />
      </div>

      <div className="flex justify-center my-16">
        <div className="transition duration-100 hover:opacity-80 hover:scale-[200%]">
          <stripe-buy-button
            buy-button-id="buy_btn_1QGDZdHbtyuxxlv7iRZAgeU9"
            publishable-key="pk_live_51O91brHbtyuxxlv7n6U4YQcFJRo89C4D8uuK18MDOkBdV0eSVFyCFSiiDjcBH3dmagbdq5wTiLmu52rhcdFsCVmm00zPvn1uvZ"
          />
        </div>
      </div>

    </div>
  );
}

function PrivateSponsor({ name, href }: { name: string, href: string }) {
  return (
    <Link href={href} target="_blank" className="bg-slate-50 rounded-xl px-8 py-4 font-bold my-auto text-nowrap duration-500 hover:opacity-80 hover:scale-[110%] hover:shadow-lg">{name}</Link>
  );
}