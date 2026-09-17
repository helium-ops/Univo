import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import Page from './Page.jsx';
import { usePage } from '../context/PageContext.jsx'

export default function Combiner(){
  const { pages } = usePage();
    return(
      <Routes>
      <Route path='/' element={<Container/>}></Route>
      {pages.map((page) => (
    <Route
        key={page.id}
        path={`/page/${page.id}`}
        element={<Page />}
    />
))}
      
      </Routes>

    )
}