'use client'
import { fetchAttachment } from "@/common/api/fetchAttachment";
import { fetchProjects, Project } from "@/common/api/fetchProjects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "./LinkButton";
import TitlePin from "./TitlePin";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setProjects(await fetchProjects())
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])
  return (
    <div className="md:mb-64 mb-32 mx-auto max-w-[1200px] justify-center">

      <div className="flex md:ml-[100px]">
        <TitlePin title="Projects" />
      </div>

      <p className="text-2xl px-4 py-4 font-bold md:ml-[100px]">プロジェクト</p>

      <div className="flex flex-wrap md:mx-auto mx-4 justify-center">
        {projects.map((project, index) => (
          <Item key={index} project={project} />
        ))}
        <Item project={{ title: '[TEST] ながいながいながいながいながいながいながいながいながいながいながいテスト', description: 'ぽよよ〜ん', attachment: [], url: '' }} />
        <Item project={{ title: '[TEST] localhouse-jp/lp-frontend', description: 'Evil for said the of. She weak name radiant a bust and pallas is heart this floor and thy while. The censer weary stronger have still above. Here smiling lamplight. Peering desolate eagerly above disaster only the devil me not out as at while. For still entreating blessed swung sat now said then muttered till. Said and my the here my. The dreaming cried my repeating floor god front. Nightly floor whose whispered uncertain silence fact murmured living the. Beguiling sat the chamber. Off streaming leave. What of you. Door there whom door one there fancy morrow then ah above and flung enchanted i with.', attachment: [], url: '' }} />
        <Item project={{ title: 'プロジェクトテスト01', description: 'すごいプロジェクトです', attachment: [], url: '' }} />
      </div>

      <div className="flex justify-end md:mr-[120px] mr-4 my-8">
        <LinkButton href="/projects" title="もっと見る" />
      </div>
    </div>
  );
}

function Item({ project }: { project: Project }) {
  const [image, setImage] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  useEffect(() => {
    (async () => {
      try {
        const image = await fetchAttachment(project.attachment?.[0])
        setImage(image);
        setImageStatus('loaded');
      } catch {
        setImageStatus('error');
      }
    })();
  }, [project.attachment])

  return <Link className="flex flex-col gap-2  md:m-4 mx-auto my-4 md:w-[300px] w-full overflow-hidden transition duration-500 hover:opacity-80 hover:scale-[99%]" href={project.url} target="_blank">
    <div className={`bg-slate-100 h-[200px] w-full ${imageStatus === 'loading' && 'animate-pulse'}`}>
      {imageStatus === 'loaded' &&
        <Image src={image} alt={""} width={300} height={200} className="object-cover h-64 w-full" onError={() => { setImageStatus('error') }} />
      }
    </div>
    <p className="font-bold text-xl w-full line-clamp-1">{project.title}</p>
    <p className="text-ellipsis line-clamp-2 w-full md:w-[300px] from-neutral-300">
      {project.description}
    </p>
  </Link>
}