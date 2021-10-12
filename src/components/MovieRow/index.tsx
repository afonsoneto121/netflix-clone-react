import {Result} from '../../interfaces/General'
import './styles.css'
type Props = {
  title: string,
  items: Result[]
}
export const MovieRow = ({title, items}: Props) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.length > 0 && items.map((item: Result, index: number) => (
            <div key={index} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                  alt={item.name === null ? item.title: item.name }/>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
