/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

export const PageContext = createContext(null);

export function PageProvider({ children }) {

  const users = JSON.parse(localStorage.getItem("users") || "[]");

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

    const updatedPages = [...(user.pages || []), newPage];

    user.pages = updatedPages;

    setPages(updatedPages);

    localStorage.setItem("users", JSON.stringify(users));
}

  
  function deletePage(pageId) {
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