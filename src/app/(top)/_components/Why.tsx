
export default function Why() {
  return (
    <div className="w-full bg-gray-3" id="why">
      {/* <div className="w-full my-32 bg-gray-950 text-white duration-500 hover:py-1 hover:shadow-[inset_0px_25px_25px_rgba(0,0,0,0.5),_inset_0px_-25px_25px_rgba(0,0,0,0.5)]"> */}
      <div className="flex flex-col lg:flex-row py-32 px-4 md:px-32 max-w-[1700px] md:mx-auto gap-12 justify-center">
        <p className="font-bold min-w-[240px] text-3xl my-auto text-center">ストーリー</p>
        <div className="flex flex-col lg:max-w-[720px] max-w-full gap-6">
          <p className="font-bold w-full lg:text-2xl text-xl">エンジニアが創造的な活動ができる場所を創りたい</p>
          <p>エンジニアが技術を駆使して新しい価値を生み出すためには、自由に創造できる環境が必要です。<br />
            既存のコミュニティでは技術習得や情報共有が中心となることが多いですが、私たちは一歩進んで、エンジニアが自分のスキルやアイデアを思い切り活かし、挑戦できる場所を提供したいと考えています。<br />
            <br />
            私たちが目指すのは、誰もが気軽に集まり、自然にアイデアが広がり、技術と創造性が融合する空間です。時間や形式に縛られず、エンジニアが自分のペースで創造活動に取り組むことができる、オープンでフレンドリーな環境を作り上げます。ここでは、互いに刺激を与え合いながら共に成長したいと思っています。</p>
        </div>
      </div>
    </div>
  );
}