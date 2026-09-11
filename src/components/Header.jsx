import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logos/png/Logo (1).png";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const { loggedIn, logout } = useAuth();
    return (
        <header className="flex justify-between items-center px-3 py-0.5  h-[11.72%] bg-white-surface">
            <div className="flex items-center justify-center gap-2 transition duration-300 hover:scale-110">
                <img
                    src={logo}
                    alt="Unity logo"
                    className="w-10 h-10 object-contain"
                />
                <h1 className="font-bold text-[2vw] mb-1">Univo</h1>
            </div>
             <div className="w-[20%] h-[80%] flex justify-end items-center gap-2 pr-2">
            {loggedIn === true && <button className="h-[49%] w-[29%] rounded-[0.8vh] bg-white-accent text-black-text text-bold" onClick={()=>logout()}>Logout</button>}

            <button
                className="h-[49%] w-[12%] text-center bg-white-accent rounded-[50%] text-white"            >
                <FontAwesomeIcon icon={faMoon} />
            </button>
            </div>
        </header>
    );
}