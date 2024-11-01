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
      setProjects(await fetchProjects())
    })();
  }, [])
  return (
    <div className="mb-64 mx-auto max-w-[1200px] justify-center">

      <div className="flex md:ml-[100px]">
        <TitlePin title="Projects" />
      </div>

      <p className="text-3xl px-4 py-4 font-bold md:ml-[100px]">プロジェクト</p>

      <div className="flex flex-wrap md:mx-auto mx-4 justify-center">
        {projects.map((project, index) => (
          <Item key={index} project={project} />
        ))}
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
      const image = await fetchAttachment(project.attachment?.[0])
      setImage(image);
      setImageStatus('loaded');
    })();
  }, [project.attachment])

  return <Link className="flex flex-col gap-2  md:m-6 mx-auto my-4 md:w-[300px] w-full overflow-hidden transition duration-500 hover:opacity-80 hover:scale-[99%]" href={project.url} target="_blank">
    <div className={`bg-gray-50 h-64 w-full ${imageStatus === 'loading' && 'animate-pulse'}`}>
      {imageStatus === 'loaded' &&
        <Image src={image} alt={""} width={300} height={200} className="object-cover h-full w-full" onError={() => { setImageStatus('error') }} />
      }
    </div>
    <p className="font-bold text-xl w-full line-clamp-1">{project.title}</p>
    <p className="w-[300px] text-ellipsis line-clamp-2 from-neutral-300">{project.description}</p>
  </Link>
}