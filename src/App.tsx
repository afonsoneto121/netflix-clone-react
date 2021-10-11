import { useEffect } from 'react';
import Tmdb from './service/Tmdb';
import './App.css';

function App() {
  useEffect( () => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();

      console.log(list)
    }    
    loadAll();
  }, [])
  return (
    <h1>Olá mundo</h1>
  );
}

export default App;
