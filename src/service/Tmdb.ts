import { Result } from "../interfaces/General";
import { Movie } from "../interfaces/Movie";
import { Serie } from "../interfaces/Serie";

const API_KEY = `?api_key=60cd511cb0883fd6ae229d1d6c1e1cb1&language=pt-BR`;

const API_BASE = 'https://api.themoviedb.org/3/';

/* 
- Originais Netflix
- Recomendados
- Em alta
- Ação
- comédia
- terror
- romance
- documentário
*/

const basicFetch = async (endpoint: string,params: string) => {
  return await fetch(`${API_BASE}${endpoint}${API_KEY}${params}`)
            .then((response) => {return response.json()})
}
const jsonToType = async <Type>(endpoint: string, params: string, objectResult: string) => {
  let result = await basicFetch(endpoint,params)
  return result[objectResult].map((value: Type) => value)
  //return discoverList;
}
const detailsToType = async <Type>(endpoint: string, params: string) => {
  let result: Type = await basicFetch(endpoint,params);
  return result;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await jsonToType<Result>('discover/tv','&with_networks=213','results')
      },
      {
        slug: 'trending',
        title: 'Recomendados',
        items: await jsonToType<Result>('trending/all/week','','results')
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await jsonToType<Result>('movie/top_rated','','results')
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await jsonToType<Result>('discover/movie','&with_genres=28','results')
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await jsonToType<Result>('discover/movie','&with_genres=35','results')
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await jsonToType<Result>('discover/movie','&with_genres=27','results')
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await jsonToType<Result>('discover/movie','&with_genres=10749','results')
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await jsonToType<Result>('discover/movie','&with_genres=99','results')
      },
      
    ]
  },
  getMovieInfo: async (movieId:string ,type:string) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await detailsToType<Movie>(`movie/${movieId}`,'');
          break;
        case 'tv':
          info = await detailsToType<Serie>(`tv/${movieId}`,'');
          break;
      }
    }
    return info;
  }
}