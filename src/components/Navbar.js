import { Link } from 'react-router-dom'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                <h1>wanime</h1>
            </Link>
            <ul className={styles['login-signup']}>
                <li className={styles['login-signup-item']}>
                    <Link className={styles['login-signup-link']} to="/login">Login</Link>
                </li>
                <li className={styles['login-signup-item']}>
                    <Link className={styles['login-signup-link']} to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    )
}
