import { Serie } from '../../../../interfaces/Serie'
import './styles.css'

type Props = {
  item: Serie
}
export const FeatureMovie = ({ item }: Props) => {
  let firstDate = new Date(item.first_air_date || "");
  
  return (
    <section className="featured" style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name || item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points"> {item.vote_average} pontos</div>
            <div className="featured--year"> {firstDate.getFullYear()} </div>
            <div className="featured--sessons"> {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured--description">
            {item.overview}
          </div>

          <div className="featured--buttons">
            <a href="/" className="featured-watch-button">▶ Assistir</a>
            <a href="/" className="featured-mylist-button">+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: {item.genres?.map(item => item.name).join(', ')}</strong>
          </div>
        </div>
      </div>
      
    </section>
  )
}
