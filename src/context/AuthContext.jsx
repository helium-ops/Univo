import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);


export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const [user, setUser] = useState(() => {
  const email = localStorage.getItem("currentUserEmail");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  return users.find((user) => user.email === email) || null;
});
  
  const users = JSON.parse(localStorage.getItem("users") ? localStorage.getItem("users") : "[]");
 function signUp(email, password) {
  

  if (users.find((user) => user.email === email)) {
    alert("Email already used");
  } else {
    const newUser = {
      email,
      password,
      pages: [
        {
          name: "Untitled",
          content: "",
          id: Date.now()
        }
      ],
      toDo: []
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", newUser.email);

    setUser(newUser); // ← important
    setLoggedIn(true);
  }
}

  function login(email, password) {
  
  if(localStorage.getItem("users")){

  const mainUser = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!mainUser) {
    alert("Invalid email or password");
    return;
  }

  setUser(mainUser); // ← important
  setLoggedIn(true);

  localStorage.setItem(
    "currentUserEmail",
    mainUser.email
  );
} else {
  alert('No users yet!')
}
}

function logout() {
  setLoggedIn(false);
  setUser(null);
  localStorage.removeItem("currentUserEmail");
} 

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        signIn,
        setSignIn,
        user,
        setUser,
        signUp,
        login,
        users,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
