'use client'


export type Project = {
  title: string;
  description: string;
  attachment: string[];
  url: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_BASE_URL + "/?rest_route=/wp/v2/posts&per_page=3&categories=3", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((project: any): Project => {
    const parser = new DOMParser();
    const descriptionDom = parser.parseFromString(project.content.rendered, "text/html");
    return {
      title: project.title.rendered,
      description: descriptionDom.querySelector("p")?.textContent || "",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      attachment: project._links["wp:attachment"]?.map((link: any) => link.href) || [],
      url: project.link,
    }
  });
}