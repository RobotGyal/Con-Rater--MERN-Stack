import { useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function AccountPage(){
    const {ready,user} = useContext(UserContext)

    if(!ready){
        return 'Loading...'
    }

    if (ready && !user){
        return <Navigate to={'/login'} />
    }

    return (
        <div>account page for {user?.name}</div>
    );
}