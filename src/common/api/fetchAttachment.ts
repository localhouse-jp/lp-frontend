export async function fetchAttachment(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID || '',
      "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET || '',
    }
  });
  const data = await res.json();
  return data?.[0]?.media_details?.sizes?.large?.source_url || '';
}