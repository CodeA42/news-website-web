import {useHistory} from "react-router-dom";

function LogOut(){
    let history = useHistory();
    localStorage.clear();
    history.push("");

    return null;
}

export default LogOut;