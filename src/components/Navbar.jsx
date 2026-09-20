import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePage } from "../context/PageContext";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { users } = useAuth();
  const { createPage, deletePage } = usePage();
  const { pageId } = useParams();
  const [openPage, setOpenPage] = useState(null);
  const navigate = useNavigate();
  const user = users.find(
    (user) => user.email === localStorage.getItem("currentUserEmail"),
  );

  const recentPage = [...user.pages].sort((a, b) => b.id - a.id)[0];

  const pages = user?.pages || [];

  const todos = user?.toDo ?? [];

  return (
    <aside className="flex justify-around items-start flex-col gap-6 h-[88.38%] w-[14.1%] fixed left-2 bg-white-surface pr-0 text-white-text">
      <section className="h-[15%] w-full flex justify-around items-start flex-col">
        <h1 className="font-bold text-3xl">Recents</h1>

        <div className="overflow-auto">
          <h2 className="font-semibold">{recentPage?.name}</h2>
          {todos.map((todo) => (
            <h1 key={todo.id}>{todo.name}</h1>
          ))}
        </div>
      </section>

      <section className="h-[14%] flex justify-around items-start flex-col gap-4 w-full relative">
        <h1 className="font-bold text-3xl">Pages</h1>

        <div className="overflow-auto flex flex-col gap-2 w-[40%] no-scrollbar">
          {pages.map((page) => (
  <div key={page.id} className="relative">

    <div className="flex justify-center items-center w-[110%]">
      <NavLink
        to={`/page/${page.id}`}
        className="font-bold w-[70%]"
      >
        {page.name}
      </NavLink>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenPage(openPage === page.id ? null : page.id);
        }}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
    </div>

    {openPage === page.id && (
      <div
        className="fixed flex justify-start items-center flex-col
                   bg-black-surface text-black-text rounded-2xl
                   h-[20%] z-[999] w-[6%] p-2"
        onClick={(e) => {e.stopPropagation(); setOpenPage(null);}}
>   <button
          onClick={() => {
            deletePage(page.id);
            navigate('/');
          }}
          className="text-[10px] font-semibold"
        >
          Delete page
        </button>
      </div>
    )}

  </div>
))}
        </div>

        <button
          className="absolute bottom-2 h-[39%] mb-[-23%] text-[90%] w-[55%] font-semibold text-1xl rounded-[0.8vh] bg-white-accent text-black-text hover:opacity-[0.9]"
          onClick={() => createPage()}
        >
          New page
        </button>
      </section>

      

      {/* Current user */}
      <NavLink to="/">{localStorage.getItem("currentUserEmail")}</NavLink>
    </aside>
  );
}
