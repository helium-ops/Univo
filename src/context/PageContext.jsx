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

    setPages((prevPages) => [...prevPages, newPage]);

    user.pages = [...user.pages, newPage];

    localStorage.setItem("users", JSON.stringify(users));
  }
  
  function deletePage(pageId) {
    setPages(pages.filter((page) => page.id !== pageId));
  }

  function editPage() {

  }

  return (
    <PageContext.Provider
      value={{ pages, createPage, deletePage, editPage }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}