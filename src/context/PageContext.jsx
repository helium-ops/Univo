/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
import { useAuth } from './AuthContext'

export const PageContext = createContext(null);

export function PageProvider({ children }) {

  const {users, setUsers} = useAuth();

  const user = users.find(
    (user) => user.email === localStorage.getItem("currentUserEmail")
  );

  const [pages, setPages] = useState(user?.pages || []);

function createPage() {
    const newPage = {
        name: "Untitled",
        content: "",
        id: Date.now(),
        settingToggle: false
    };

    if (!user) {
        console.log("Current user not found");
        return;
    }

    setUsers(prevUsers => {
        const updatedUsers = prevUsers.map(u =>
            u.email === user.email
                ? {
                    ...u,
                    pages: [...(u.pages || []), newPage]
                }
                : u
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        return updatedUsers;
    });
}
  function deletePage(pageId) {
  const updatedUsers = users.map((user) => {
    if (user.email === localStorage.getItem('currentUserEmail')) {
      return {
        ...user,
        pages: user.pages.filter((page) => page.id !== pageId),
      };
    }

    return user;
  });

  setUsers(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}


  return (
    <PageContext.Provider
      value={{ pages, createPage, deletePage }}
    >
      {children}
    </PageContext.Provider>
  );

}

export function usePage() {
  return useContext(PageContext);
}
