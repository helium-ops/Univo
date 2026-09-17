import { useParams } from 'react-router-dom';

export default function Page() {
    const { id } = useParams();

    const users = JSON.parse(localStorage.getItem('users'));

    const pages = users
        .find(
            (user) =>
                user.email === localStorage.getItem('currentUserEmail')
        )
        .pages;

    return (
        <>
            {pages.map((page) => (
                <div
                    key={page.id}
                    className={`fixed right-0 bottom-0 h-[88.78%] w-[85.9%]
                    
                        ${
                        String(page.id) !== id ? 'hidden' : 'flex'
                    } justify-center items-center`}
                >
                    <textarea
                        className="h-full w-full p-10 outline-none"
                        placeholder='No content'
                        defaultValue={page.content}
                        onChange={(e)=>{
                            page.content = e.target.value;
                            localStorage.setItem('users', JSON.stringify(users));
                        }}
                    />
                </div>
            ))}
        </>
    );
}