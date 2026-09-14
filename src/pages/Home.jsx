import Navbar from '../components/Navbar';
import Container from '../components/Container'
import { Route, Routes } from 'react-router-dom';


export default function Home(){
    return(
        <div className='w-full flex justify-start items-start h-[88.78%]'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Container/>}></Route>
            </Routes>
        </div>
    )
    
}