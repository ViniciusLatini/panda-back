import { VideosApi } from "../types/video";

export async function getAllUserVideosService(): Promise<VideosApi> {
  const pandaKey = process.env.PANDA_KEY as string;
  const res = await fetch("https://api-v2.pandavideo.com.br/videos//", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: pandaKey,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));

    return res;
}
