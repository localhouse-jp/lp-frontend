'use client'
import TitlePin from "@/app/_components/TitlePin";
import { fetchNews, News as NewsType } from "@/common/api/fetchNews";
import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState<NewsType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        setNews(await fetchNews())
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])

  return (
    <div className="md:my-64 my-32 mx-auto max-w-[1200px] justify-center" id="news">

      <div className="flex md:ml-32">
        <TitlePin title="News" />
      </div>
      <p className="md:text-2xl text-xl px-4 py-4 font-bold md:ml-32">ニュース</p>
      {news.map((news, index) => (
        <Item key={index} title={news.title} description={news.description} date={news.date} link={news.url} />
      ))}
    </div>
  );
}

type ItemProps = {
  title: string;
  date: Date;
  description: string;
  link: string;
}

function Item(props: ItemProps) {
  return (
    <div className="flex flex-wrap md:mx-32 mx-2 gap-2">
      <a
        href={props.link}
        className="p-2 w-full duration-500 hover:opacity-80 hover:scale-[99%]"
        target="_blank"
      >
        <p className="text-xs text-neutral-500">{props.date.toLocaleDateString('sv-SE').replaceAll("-", ".")}</p>
        <p className="font-bold text-md">{props.title}</p>
        <p className="text-sm text-neutral-800">{props.description}</p>
      </a>
      <hr className="h-0.5 w-full bg-neutral-100 border-t-0" />
    </div>
  );
}