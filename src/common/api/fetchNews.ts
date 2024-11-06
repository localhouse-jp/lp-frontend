'use client'

export type News = {
  title: string;
  description: string;
  date: Date;
  url: string;
}

export async function fetchNews(): Promise<News[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_BASE_URL + "/?rest_route=/wp/v2/posts&per_page=5&categories=5", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((project: any): News => {
    const parser = new DOMParser();
    const descriptionDom = parser.parseFromString(project.content.rendered, "text/html");
    return {
      title: project.title.rendered,
      description: descriptionDom.querySelector("p")?.textContent || "",
      date: new Date(project.date),
      url: project.link,
    }
  });
}