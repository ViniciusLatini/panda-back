export interface Video {
  id: string;
  title: string;
  description: string;
  status: string;
  user_id: string;
  folder_id: string | null;
  library_id: string;
  live_id: string | null;
  video_external_id: string;
  converted_at?: string;
  created_at: string;
  updated_at: string;
  storage_size: number;
  length: number;
  video_player: string;
  video_hls: string;
  width: number;
  height: number;
  playable: boolean;
  backup: boolean;
  preview: string;
  thumbnail: string;
  playback: string[];
}

export interface VideosApi {
  videos: Video[];
  pages: number;
  total: number;
}

export interface VideoInfo {
  title: string;
  description: string;
}