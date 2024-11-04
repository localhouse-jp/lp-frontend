import TitlePin from "./TitlePin";

export default function News() {
  return (
    <div className="md:my-64 my-32 mx-auto max-w-[1200px] justify-center">

      <div className="flex md:ml-32">
        <TitlePin title="News" />
      </div>
      <p className="md:text-2xl text-xl px-4 py-4 font-bold md:ml-32">ニュース</p>

      <Item title={"ローカルハウスを設立しました！"} date={"2024.11.4"} description={"よろしくお願いいたします！"} link={""} />

    </div>
  );
}

type ItemProps = {
  title: string;
  date: string;
  description: string;
  link: string;
}

function Item(props: ItemProps) {
  return (
    <div className="flex flex-wrap md:mx-32 mx-2 gap-2">
      <a
        href={props.link}
        className="p-2 w-full duration-500 hover:opacity-80 hover:scale-[99%]"
      >
        <p className="text-xs text-neutral-500">{props.date}</p>
        <p className="font-bold text-md">{props.title}</p>
        <p className="text-sm text-neutral-800">{props.description}</p>
      </a>
      <hr className="h-0.5 w-full bg-neutral-100 border-t-0" />
    </div>
  );
}