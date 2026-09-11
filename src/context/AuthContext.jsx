import { createContext, useContext, useState } from 'react';
import { profiles, setProfiles } from "../data/users" 

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [signIn, setSignIn] = useState(true);

    const [user, setUser] = useState(
        localStorage.getItem('currentUserEmail') ? {email: localStorage.getItem('currentUserEmail')} : null
    );


    function signUp(email, password) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      if(users.find(user => user.email === email)){
       alert("Email already used");
      }
      else{
        const newUser = {email, password, pages: [], toDo: []};
        users.push(newUser);
        localStorage.setItem('currentUserEmail', newUser.email);
        setLoggedIn(true);
        setProfiles([...profiles, newUser]);
        localStorage.setItem('profiles', JSON.stringify(profiles));
      }
    }

    

    function login(email, password){
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const mainUser = users.find((user)=> user.email === email && user.password === password);
        setLoggedIn(true);
        localStorage.setItem('currentUserEmail', mainUser.email);
    }

    function logout(){
        setUser(null);
        setLoggedIn(false);
        localStorage.removeItem('currentUserEmail');
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