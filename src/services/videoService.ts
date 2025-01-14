import { VideoInfo, VideosApi } from "../types/video";
import { redis } from "../utils/redis";

const CACHE_EXPIRATION = 20;

export async function getAllUserVideosService(): Promise<VideosApi> {
  const cacheKey = "list-videos";
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const pandaKey = process.env.PANDA_KEY as string;
  const res = await fetch("https://api-v2.pandavideo.com.br/videos//", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: pandaKey,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then(async (res) => {
      await redis.set(cacheKey, JSON.stringify(res), "EX", CACHE_EXPIRATION);
      return res;
    })
    .catch((err) => console.error(err));

  return res;
}

export async function getVideoByIdService(id: string): Promise<VideosApi> {
  const pandaKey = process.env.PANDA_KEY as string;
  const res = await fetch(`https://api-v2.pandavideo.com.br/videos/${id}`, {
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

export async function editInfoVideoService(
  id: string,
  body: VideoInfo
): Promise<VideosApi> {
  const pandaKey = process.env.PANDA_KEY as string;
  const options = {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: pandaKey,
    },
    body: JSON.stringify({
      title: body.title,
      description: body.description,
    }),
  };

  const res = fetch(`https://api-v2.pandavideo.com.br/videos/${id}`, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));

  return res;
}
