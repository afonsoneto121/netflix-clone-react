export interface Movie {
  adult?: boolean,
  backdrop_path?: string | null,
  genres?: Genre[],
  homepage?: string | null,
  id?: number,
  imdb_id?: string | null,
  original_language?: string,
  original_title?: string,
  overview?: string | null,
  popularity?: number,
  poster_path?: string | null,
  realeas_date?: string,
  spoken_language?: Language[],
  status?: string,
  titles?: string,
  video?: boolean,
  vote_average?: number
}

export interface Genre {
  id: number,
  name: string,
}
export interface Language {
  iso_639_1: string,
  name: string,
}