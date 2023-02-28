import './App.css';
import {Main} from "./component/Main"
import { PokemonPage } from './component/PokemonPage';
import {Routes, Route } from 'react-router-dom';



export const AppRouter = () => {
  //window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Routes>

   <Route index path='/' element={<Main />} />
   <Route path='pokemon/:id' element={<PokemonPage />} />
  
    </Routes>
  );
}


