import { type } from 'os'
import './styles.css'
type Props = {
  black: boolean
}
export const Header = ({black}:Props ) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
        </a>
      </div>
      <div className="header--user">
      <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"/>
        </a>
      </div>
    </header>
  )
}
