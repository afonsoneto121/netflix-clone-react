import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './Page/Home';

function App() {
  const [scrollY, setScrollY] = useState(false);
  
  useEffect(() => {
    const eventScrollListener = () => {
      if(window.scrollY > 50) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    }
    window.addEventListener('scroll', eventScrollListener);
    return () => {
      window.removeEventListener('scroll', eventScrollListener);
    }
  }, [])
  return (
    <>
      <Header black={scrollY}/>
      <HomePage />
    </>
  );
}

export default App;
