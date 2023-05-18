// import styles from "./navbar-user.mobile.css"
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../redux/auth/auth-operations"
// import {selectIsLoggedIn} from "../../../redux/auth/auth-selectors"
import { getUser } from "redux/auth/auth-selectors";
import { useNavigate } from "react-router-dom";


const NavBarUser = () => {
    const { name } = useSelector(getUser)
    // const isLoggedIn = useSelector(selectIsLoggedIn)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = async()=> {
        await dispatch(logout());
        navigate("/main")
    }
    

    return (
        <div>
            {name},<button type="button" onClick={onLogout}>Logout</button>
        </div>
    )
    
}

export default NavBarUser;