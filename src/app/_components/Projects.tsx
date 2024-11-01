'use client'
import { fetchAttachment } from "@/common/api/fetchAttachment";
import { fetchProjects, Project } from "@/common/api/fetchProjects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      setProjects(await fetchProjects())
    })();
  }, [])
  return (
    <div className="h-[80vh] mx-auto">
      <p className="text-xl text-center p-32">Projects</p>

      <div className="flex">
        {projects.map((project, index) => (
          <Item key={index} project={project} />
        ))}
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

  return <Link className="flex flex-col flex-wrap gap-2 m-6 w-128 overflow-hidden" href={project.url} target="_blank">
    <div className={`bg-gray-50 h-64 ${imageStatus === 'loading' && 'animate-pulse'}`}>
      {imageStatus === 'loaded' &&
        <Image src={image} alt={""} width={300} height={200} className="object-cover h-full" onError={() => {setImageStatus('error')}} />
      }
    </div>
    <p className="font-bold text-xl w-128">{project.title}</p>
    <p className="w-[300px]  text-ellipsis line-clamp-2 from-neutral-300">{project.description}</p>
  </Link>
}