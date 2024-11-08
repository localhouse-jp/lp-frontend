'use client'
import { LinkButton } from "@/components/LinkButton";
import TitlePin from "@/app/_components/TitlePin";
import { fetchAttachment } from "@/common/api/fetchAttachment";
import { fetchProjects, Project } from "@/common/api/fetchProjects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="md:mb-64 mb-32 mx-auto max-w-[1400px] justify-center" id="projects">

      <div className="flex md:ml-[100px]">
        <TitlePin title="Projects" />
      </div>

      <p className="text-2xl px-4 py-4 font-bold md:ml-[100px]">プロジェクト</p>

      <div className="flex flex-wrap md:mx-auto mx-4 justify-center">
        {projects.map((project, index) => (
          <Item key={index} project={project} />
        ))}
      </div>

      <div className="flex justify-end md:mr-[120px] mr-4 my-8">
        <LinkButton href="https://blog.localhouse.jp/category/projects/" title="もっと見る" />
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

  return <Link className="flex flex-col gap-1 md:m-4 mx-auto my-4 md:w-[375px] w-full overflow-hidden transition duration-500 hover:opacity-80 hover:scale-[99%]" href={project.url} target="_blank">
    <div className={`bg-slate-100 aspect-video overflow-hidden w-full ${imageStatus === 'loading' && 'animate-pulse'}`}>
      {imageStatus === 'loaded' &&
        <Image src={image} alt={""} width={300} height={200} className="object-cover w-full aspect-video" onError={() => { setImageStatus('error') }} />
      }
    </div>
    <p className="font-bold text-xl w-full line-clamp-1 mt-2">{project.title}</p>
    <p className="text-ellipsis line-clamp-2 w-full md:w-[300px] from-neutral-300">
      {project.description}
    </p>
  </Link>
}