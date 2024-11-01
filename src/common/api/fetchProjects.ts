'use client'


export type Project = {
  title: string;
  description: string;
  attachment: string[];
  url: string;
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_BASE_URL + "/?rest_route=/wp/v2/posts&categories=3", {
    headers: {
      "Content-Type": "application/json",
      "CF-Access-Client-Id": process.env.NEXT_PUBLIC_CF_ACCESS_CLIENT_ID || '',
      "CF-Access-Client-Secret": process.env.NEXT_PUBLIC_CF_ACCESS_CLIENT_SECRET || '',
    }
  });
  const data = await res.json();

  return data.map((project: any): Project => {
    const parser = new DOMParser();
    const descriptionDom = parser.parseFromString(project.content.rendered, "text/html");
    return {
      title: project.title.rendered,
      description: descriptionDom.querySelector("p")?.textContent || "",
      attachment: project._links["wp:attachment"]?.map((link: any) => link.href) || [],
      url: project.link,
    }
  });
}