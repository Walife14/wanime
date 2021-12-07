import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useTheme } from '../hooks/useTheme'
import { useAuthContext } from '../hooks/useAuthContext'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { mode } = useTheme()
    const { user } = useAuthContext()

    return (
        <nav className={`${styles.navbar} ${styles[mode]}`}>
            <Link to="/" className={styles.brand}>
                <h1 className={`${styles.logo} ${styles[mode]}`}>wanime</h1>
            </Link>
            {!user &&
                <ul className={styles['login-signup']}>
                    <li className={styles['login-signup-item']}>
                        <Link className={`${styles['login-signup-link']} ${styles[mode]}`} to="/login">Login</Link>
                    </li>
                    <li className={styles['login-signup-item']}>
                        <Link className={`${styles['login-signup-link']} ${styles[mode]}`} to="/signup">Signup</Link>
                    </li>
                </ul>
            }
            {user &&
                <ul>
                    <li>Hello, {user.displayName}</li>
                    <li onClick={logout}>Logout</li>
                    <li>
                        <Link to="/my-profile">My Profile</Link>
                    </li>
                </ul>
            }
        </nav>
    )
}
