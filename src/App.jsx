import Header from "./components/Header"
import { AuthProvider, useAuth } from "./context/AuthContext";
import Auth from './pages/Auth'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';



function Wrapper(){
   const { loggedIn } = useAuth();
   return(
    <div className='h-full w-full p-0'>
            
             
           <Header/>
           <div className="h-[88.38%] w-full fixed bottom-2">
            
            
              <Routes>{ !loggedIn ? 
                <Route path='/' element={<Auth/>}></Route> : 
                <Route path='/' element={<Home/>}></Route>
              }
              </Routes>
              
              
           </div>
        </div>
   )
}

function App() {
  
    return(
      <AuthProvider>
        <BrowserRouter>
        <Wrapper/>
        </BrowserRouter>
        </AuthProvider>
    )
}


export default App
