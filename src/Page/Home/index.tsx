import { useEffect, useState } from 'react';
import { MovieRow } from '../../components/MovieRow';
import { Result } from '../../interfaces/General';
import { Serie } from '../../interfaces/Serie';
import Tmdb from '../../service/Tmdb';
import { FeatureMovie } from './components/FeatureMovie';

export const HomePage = () => {
  const [movieList, setMovieList] = useState<any>([]);
  const [featureData, setFeatureData] = useState<Serie | undefined>(undefined)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(item => item.slug === 'originals');
      let random = Math.floor(Math.random() * originals[0].items.length - 1);
      let chosen = originals[0].items[random];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);
    }
    loadAll();
  }, [])
  return (
    <div className="page">
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item: any, key: number) => (
          <MovieRow key={key} title={item.title} items={item.items} />

        ))}
      </section>
      {movieList.length <=0  && 
        <div className="loading" >
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>

      }
    </div>
  );
}
