import Header from "../components/Header";

export default function LoginPage(){
    return (
    <div className="mt-4">
        <h1 className="text-4xl text-center"> Login</h1>
        <form className="max-w-2xl">
            <input type="email" placeholder='you@email.com'/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    </div>
    );
}