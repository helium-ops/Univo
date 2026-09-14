import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Container(){
    const user = JSON.parse(localStorage.getItem('users')).find((g)=>g.email === localStorage.getItem('currentUserEmail'));
    const displayItem = user.pages.reduce((latest, page) =>
        page.id > latest.id ? page : latest
    )
    return(
        <main className='fixed right-2 flex justify-start items-start flex-col h-full w-[85.9%] px-9 py-7'>
            <header className="w-full h-[20%]  flex justify-start items-start flex-col gap-4">
                <h1 className="text-4xl font-extrabold">Start your journey on Univo</h1>
                <h3 className="font-bold ">Your universe awaits.</h3>
            </header>
            <section className="w-full h-[30%] flex justify-center items-start flex-col relative">
                <div className="flex justify-start items-start flex-col h-60 w-55 bg-white-surface relative shadow-sm rounded-[1vh] py-0 ">
                    <div className="bg-black-background h-[50%] w-full absolute top-2 right-0 rounded-[1vh] flex justify-start items-end p-1">
                        <FontAwesomeIcon icon={faPlus} className="text-2xl text-black-text" />
                    </div>
                    <h1 className="font-bold mt-13 px-2 py-10">{displayItem.name}</h1>
                </div>
                <div class="h-[60%] flex justify-center items-center w-full flex-col ">
                    <header className="flex justify-center items-center flex-col gap-5">
                        <h1 className="font-extrabold text-3xl mt-14">Help your friends out!</h1>
                        <h3 className='font-bold mt-1 mb-4'>Keep you and your friends on track.</h3>
                    </header>
                    <div>
                        <button className="bg-white-accent w-35 h-10 rounded-[0.5vh] text-black-text font-semibold hover:opacity-[0.9] " onClick={()=> {window.location.href = 'https://github.com/helium-ops/Univo'}}>Help them out</button>
                    </div>
                </div>
            </section>
        </main>
    )
}