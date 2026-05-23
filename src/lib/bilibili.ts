export interface BiliBangumi {
  id: string;
  title: string;
  cover: string;
  url: string;
  progress: string;
  total: string;
  score: number | null;
  desc: string;
}

export async function getBilibiliBangumi(vmid: string, status: number = 2) {
  const url = `https://api.bilibili.com/x/space/bangumi/follow/list?vmid=${vmid}&type=1&follow_status=${status}&pn=1&ps=30`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    if (data.code !== 0) return [];

    return data.data.list.map((item: any) => ({
      id: String(item.season_id),
      title: item.title,
      cover: item.cover.replace("http:", "https:") + "@300w_400h.webp",
      url: `https://www.bilibili.com/bangumi/play/ss${item.season_id}`,
      progress: item.progress || item.new_ep?.index_show || "Not started",
      total:
        item.total_count === -1
          ? "On Air"
          : `Finished: ${item.total_count} Eps`,
      score: item.rating?.score || null,
      desc: item.evaluate || "No description provided.",
    })) as BiliBangumi[];
  } catch (e) {
    console.error(`[Bangumi] Failed to fetch status ${status}:`, e);
    return [];
  }
}
