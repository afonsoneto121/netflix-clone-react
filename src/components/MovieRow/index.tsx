import { NavigateBeforeSharp, NavigateNextSharp } from '@material-ui/icons'
import { useState } from 'react'
import {Result} from '../../interfaces/General'
import './styles.css'
type Props = {
  title: string,
  items: Result[]
}
export const MovieRow = ({title, items}: Props) => {
  
  const [scrollX, setScrollX] = useState(0); 
  
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0
    }
    setScrollX(x);
  }
  
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 150;
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x);
  }
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeSharp style={{fontSize: 50}} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextSharp style={{fontSize: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.length * 150
        }}>
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
