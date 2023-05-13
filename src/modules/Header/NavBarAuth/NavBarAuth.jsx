import { NavLink } from "react-router-dom";

import styles from "./navbarauth.module.css"

const NavBarAuth = () => {
    return (
        <div className={styles.wraper}>
            <NavLink to="/registr" className={styles.link}><button>Registr</button></NavLink>
            <NavLink to="/login" className={styles.link}><button>Login</button></NavLink>
    </div>
    )

}

export default NavBarAuth;