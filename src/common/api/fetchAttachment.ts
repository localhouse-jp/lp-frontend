export async function fetchAttachment(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    }
  });
  const data = await res.json();
  return data?.[0]?.media_details?.sizes?.large?.source_url || '';
}