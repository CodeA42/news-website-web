import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user"

function Logout(){
    localStorage.clear();

    const user = useContext(UserContext);
    user.setUser(null);

    return <Redirect to='/'/>;
}

export default Logout;