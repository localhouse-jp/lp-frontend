'use client'
import { LinkButton } from "@/components/LinkButton";
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
    <div className="flex flex-col gap-4" id="news">

      <div className="flex">
        <TitlePin title="News" />
      </div>
      <p className="md:text-2xl text-xl font-bold">ニュース</p>
      <div className={"flex flex-col"}>
        {news.map((news, index) => (
          <Item key={index} title={news.title} description={news.description} date={news.date} link={news.url} />
        ))}
      </div>
      <div className="flex justify-end">
        <LinkButton href="https://blog.localhouse.jp/category/news/" title="もっと見る" />
      </div>
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
    <div className="flex flex-wrap gap-2 last:border-b-1 border-neutral-100">
      <a
        href={props.link}
        className="p-2 w-full duration-500 hover:opacity-80 hover:scale-[99%]"
        target="_blank"
      >
        <p className="text-xs text-neutral-500">{props.date.toLocaleDateString('sv-SE').replaceAll("-", ".")}</p>
        <p className="font-bold text-md">{props.title}</p>
        <p className="text-sm text-neutral-800">{props.description}</p>
      </a>
    </div>
  );
}