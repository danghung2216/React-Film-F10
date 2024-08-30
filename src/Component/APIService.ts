export const URL_IMG = "https://phimimg.com/";
export const URL_DETAIL = "https://phimapi.com/phim/";
export const URL_SIGLE = "https://phimapi.com/v1/api/danh-sach/phim-le";
export const URL_SERIE = "https://phimapi.com/v1/api/danh-sach/phim-bo";
export const URL_CARTON = "https://phimapi.com/v1/api/danh-sach/hoat-hinh";
export const URL_TVSHOW = " https://phimapi.com/v1/api/danh-sach/tv-shows";
export interface IMovie {
  _id: string;
  title: string;
  name: string;
  original_title: string;
  poster_path: string;
  poster_url: string;
  slug: string;
}
export interface MovieDetails {
  slug: string;
  name: string;
  title: string;
  original_title: string;
  poster_url: string;
  description: string;
  time: string;
  episode_total: number;
  quality: string;
  lang: string;
  country: { name: string }[];
  type: string;
  year: number;
  content: string;
  episode_current: string;
  episodes: { server_data: [] };
}
export interface IEpsidoe {
  id: number;
  server_data: [];
  filename: string;
  link_embed: string;
  link_m3u8: string;
  name: string;
}
