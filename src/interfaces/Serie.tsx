import { Genre } from "./Movie";

export interface Serie {
  backdrop_path?: string | null,
  first_air_date?: string,
  genres?: Genre[],
  homepage?: string,
  id?: number,
  in_productions?: boolean,
  languages?: string[],
  last_air_date?: string,
  last_episode_to_air?: Episode,
  name?: string,
  number_of_episodes?: number,
  number_of_seasons?: number,
  origin_country?: string[],
  original_language?: string,
  original_name?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string | null,
  status?: string,
  type?: string,
  vote_average?: number,
  seasons?: Season[],
}

export interface Episode {
  air_date?: string,
  episode_number?: number,
  id?: number,
  name?: string,
  overview?: string,
  production_code?: string,
  season_number?: number,
}

export interface Season {
  air_date?: string,
  episode_count?: number,
  id?: number,
  name?: string,
  overview?: string,
  poster_path?: string | null,
  season_number?: number
}