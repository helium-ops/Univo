import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import Page from './Page.jsx';

export default function Combiner(){
    return(
      <Routes>
      <Route path='/' element={<Container/>}></Route>
      <Route path='page/:id' element={<Page/>}></Route>
      </Routes>
    )
}