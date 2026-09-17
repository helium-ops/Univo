
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { usePage } from '../context/PageContext';

export default function Navbar() {
   const { users } = useAuth();
   const { createPage } = usePage();

  const user = users.find(
    (user) => user.email === localStorage.getItem("currentUserEmail")
  );

  const recentPage = [...user.pages].sort((a, b) => b.id - a.id)[0];

  const pages = user?.pages || [];

  const todos = user?.toDo ?? [];

    return (
        <aside className="flex justify-around items-start flex-col gap-6 h-[88.38%] w-[14.1%] fixed left-2 bg-white-surface pr-0 text-white-text">

            
            <section className="h-[15%] w-full flex justify-around items-start flex-col">
                <h1 className="font-bold text-3xl">
                    Recents
                    
                </h1>

                <div className="overflow-auto">
                    
                      <h2 className='font-semibold' >{recentPage?.name}</h2>
                    {todos.map((todo) => (
                        <h1 key={todo.id}>
                            {todo.name}
                        </h1>
                    ))}
                </div>
            </section>


           
            <section className="h-[14%] flex justify-around items-start flex-col gap-4 w-full relative">

                <h1 className="font-bold text-3xl">
                    Pages
                </h1>

                <div className="overflow-auto flex flex-col">
                    {pages.map((page) => (
                        <NavLink key={page.id} to={`/page/${page.id}`} className='font-bold'>
                            {page.name}
                        </NavLink>
                    ))}
                </div>

                <button className="absolute bottom-2 h-[39%] mb-[-23%] text-[90%] w-[55%] font-semibold text-1xl rounded-[0.8vh] bg-white-accent text-black-text hover:opacity-[0.9]"
                onClick={()=>createPage()}>
                    New page
                </button>

            </section>


            {/* Todos */}
            <section className="h-[14%] flex justify-around items-start flex-col gap-4 w-full relative">

                <h1 className="font-bold text-3xl">
                    Todos
                </h1>

                <div className="overflow-auto flex flex-col">
                    {todos.map((todo) => (
                        <h1 key={todo.id}>
                            {todo.name}
                        </h1>
                    ))}
                </div>

                <button className="absolute bottom-2 h-[40%] mb-[-23%] text-[90%] w-[63%] font-semibold text-1xl rounded-[0.8vh] bg-white-accent text-black-text hover:opacity-[0.9]">
                    Make a todo list
                </button>

            </section>


            {/* Current user */}
            <NavLink to='/'>
                {localStorage.getItem('currentUserEmail')}
            </NavLink>

        </aside>
    );
}

