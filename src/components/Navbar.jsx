import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar(){
    const { users } = useAuth();
    const user = users.find((user) => user.email === localStorage.getItem('currentUserEmail'));
    const pages = user.pages;
    const todos = user.toDo;
    useEffect(()=>{ 
       
    }, [user]);
    return(
       <aside className="flex justify-around items-start flex-col gap-9 h-[88.38%] w-[14.1%] fixed left-2 bg-white-surface pr-0 text-white-text">
        <section className="h-[15%] w-100% flex justify-around items-start flex-col">
            <h1 className="font-bold text-3xl">Recents</h1>
            <div className="overflow-auto">
            {pages.map((page)=><h1>{page.name}</h1>)}
            {todos.map((todo)=><h1>{todos.name}</h1>)}
            </div>
            
        </section>
        <section className="h-[14%] flex justify-around items-start flex-col gap-4 w-full relative">
            <h1 className="font-bold text-3xl">Pages</h1>
            <div className='overflow-auto'>
            {pages.map((page)=><h1>{page.name}</h1>)}
            </div>
            <button className=" absolute bottom-2 h-[39%] mb-[-23%] text-[90%] w-[55%] font-semibold text-1xl rounded-[0.8vh] bg-white-accent text-black-text text-bold hover:opacity-[0.9]">New page</button>

        </section>
        <section className='h-[14%] flex justify-around items-start flex-col gap-4 w-full relative'>
            <h1 className='font-bold text-3xl'>Todos</h1>
            <div>
            {todos.map((todo)=><h1>{todos.name}</h1>)}
            </div>
            <button className='absolute bottom-2 h-[40%] mb-[-23%] text-[90%] w-[63%] font-semibold text-1xl rounded-[0.8vh] bg-white-accent text-black-text text-bold hover:opacity-[0.9]'>Make a todo list</button>
        </section>
        <p>{localStorage.getItem('currentUserEmail')}</p>
       </aside>
    )
}