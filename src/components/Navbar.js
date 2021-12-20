import { NavLink, Link } from 'react-router-dom'
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
        <nav>
            <div className={`${styles.navbar} ${styles[mode]}`}>
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
                        <li>
                            <NavLink className={styles['navbar-name-thumbnail']} to="/my-profile">
                                {user.displayName}
                                <img
                                    src={user.photoURL}
                                    alt={`${user.displayName}'s thumbnail`}
                                    className={styles["nav-profile-thumbnail"]}
                                />
                            </NavLink>
                        </li>
                    </ul>
                }
            </div>
            <div className={`${styles['sub-navbar']} ${styles[mode]}`}>
                <ul>
                    <li>
                        <ul>
                            <li>
                                <NavLink to="/anime-directory" activeClassName="selected-nav">
                                    Anime Directory
                                </NavLink>
                            </li>
                            {user && (
                                <li>
                                    <NavLink to="/theories" activeClassName="selected-nav">
                                        Theories
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </li>
                    <li>
                        <ul>
                            {user && (
                                <>
                                    <li>
                                        <NavLink to="/my-profile" activeClassName="selected-nav">My Profile</NavLink>
                                    </li>
                                    <li className="nav-btn" onClick={logout}>Logout</li>
                                </>
                            )}

                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
