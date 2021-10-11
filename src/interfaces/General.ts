export interface Discover {
  poster_path?: string | null,
  popularity?: number,
  id?: number,
  backdrop_path?: string | null,
  vote_average?: number,
  overview?: string,
  genre_ids?: number[],
  name?: string,
  original_name?: string,
}

export interface Trending {
  poster_path?: string | null,
  popularity?: number,
  id?: number,
  backdrop_path?: string | null,
  vote_average?: number,
  overview?: string,
  genre_ids?: number[],
  title?: string,
  original_title?: string,
}