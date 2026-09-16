import { useAuth } from "../context/AuthContext";
import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Auth(){
    const { signUp, login } = useAuth();
    const [sign, setSign] = useState(false);
    const {register, handleSubmit, formState: {errors},  } = useForm();
    const [messages, setMessages] = useState([
  "Your universe awaits.",
  "Your story continues here.",
  "Your world is waiting.",
  "Step back into your world.",
  "Something great awaits you.",
  "Your journey starts again.",
  "Welcome back to your world.",
  "Your next chapter awaits.",
  "The door is open.",
  "Your space awaits.",
  "Enter your own universe.",
  "Your world begins here.",
  "Come back to where you belong.",
  "The adventure awaits.",
  "Your moment is waiting.",
  "Everything is still here.",
  "Your journey isn't over.",
  "There's more waiting for you.",
  "Return to your world.",
  "Your next move awaits.",
  "A new chapter is waiting.",
  "Your digital world awaits.",
  "Step into what’s yours.",
  "Your story is waiting.",
  "The world awaits your return."
])

function onSubmit(e){
  let result;
  if(sign !== false){
    result = signUp(e.email, e.password);
    return;
  } else {
    result = login(e.email, e.password);
  }
    return;

}
    return(
        <main className='h-full flex justify-center items-center flex-col gap-6 px-4 py-8'>
            <h1 className="font-bold text-3xl text-center text-white-text md:text-5xl">{messages[Math.floor(Math.random() * messages.length)]}</h1>
            <section className='bg-white-surface flex justify-center items-center flex-col w-full max-w-105 relative shadow-[0_30px_70px_-25px_rgba(23,26,24,0.28)] rounded-3xl border border-white-borders p-6 md:p-8'>
                <h1 className="font-semibold text-2xl text-white-text mb-6">{sign ? 'Sign up' : 'Log in'}</h1>
        <form className="flex justify-start items-center gap-4 flex-col w-full" onSubmit={
            handleSubmit(onSubmit)}>
            <div className="flex justify-center flex-col gap-3 w-full">
                <input type="email" placeholder="name@example.com" className="w-full rounded-xl border border-white-borders bg-white-background px-4 py-3 text-sm text-white-text placeholder:text-black/40 transition duration-200 focus:border-black-accent focus:outline-none focus:ring-2 focus:ring-black-accent/30" 
                  {...register("email", {required: true})}  />
                <input type="password" placeholder="●●●●●●●●" className="w-full rounded-xl border border-white-borders bg-white-background px-4 py-3 text-sm text-white-text placeholder:text-black/40 transition duration-200 focus:border-black-accent focus:outline-none focus:ring-2 focus:ring-black-accent/30"  {...register("password", {required: true})}/>
                <button className="mt-1 w-full rounded-xl bg-white-accent px-4 py-3 text-base font-semibold text-white-background shadow-[0_18px_30px_-18px_rgba(8,120,23,0.8)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_32px_-18px_rgba(8,120,23,0.9)]" type='submit'>{sign ? 'Sign up' : 'Log in'}</button>
            </div>
            <label className="flex w-full items-center justify-start gap-2 text-sm text-white-text/80">
                <input type="checkbox" name="" id="" className="h-4 w-4 rounded border-white-borders bg-white-background text-white-accent focus:ring-black-accent" />
                <h4>Remember me</h4>
            </label> 
           {sign === true ? <p className="text-sm text-white-text/80">{signUp ? 'Already have an account?' : 'Dont have an account?'}<span className="font-semibold text-white-accent cursor-pointer" onClick={()=>{
                setSign(false);
            }}>{sign ? 'Log in' : 'Sign up'}</span></p> : <p className="text-sm text-white-text/80">{sign ? 'Already have an account?' : 'Dont have an account?'}<span className="font-semibold text-white-accent cursor-pointer" onClick={()=>{
                setSign(true);
            }}>{sign ? 'Log in' : 'Sign up'}</span></p>}
        </form>
        </section>
        </main>
    )
}