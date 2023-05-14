// import styles from "./navbar-user.mobile.css"
import { useSelector } from "react-redux";

import { getUser } from "redux/auth/auth-selectors";


const NavBarUser = () => {
const {name} = useSelector(getUser)

    return (
        <div>
            {name},<button>Logout</button>
        </div>
    )
    
}

export default NavBarUser;