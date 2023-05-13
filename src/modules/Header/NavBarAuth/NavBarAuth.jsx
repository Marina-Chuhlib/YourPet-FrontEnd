import { NavLink } from "react-router-dom";

import styles from "./navbarauth.module.css"

const NavBarAuth = () => {
    return (
        <div className={styles.wraper}>
            <NavLink to="/register" className={styles.link}><button>Register</button></NavLink>
            <NavLink to="/login" className={styles.link}><button>Login</button></NavLink>
    </div>
    )

}

export default NavBarAuth;