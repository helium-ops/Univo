import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex justify-start items-start h-[88.78%]">
      <Navbar />

      <Outlet />
    </div>
  );
}