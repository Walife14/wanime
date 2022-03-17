import { NavLink, Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useTheme } from '../hooks/useTheme'
import { useAuthContext } from '../hooks/useAuthContext'
import { useRef } from 'react'

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { logout } = useLogout()
    const { mode } = useTheme()
    const { user } = useAuthContext()
    const loginSignup = useRef()
    const subNav = useRef()
    const loggedinNav = useRef()

    const toggleNav = () => {
        if (!user) {
            const x = loginSignup.current
            x.classList.toggle(styles['show'])
        }
        const y = subNav.current
        y.classList.toggle(styles['show'])

        if (user) {
            const i = loggedinNav.current
            i.classList.toggle(styles['show'])
        }
    }

    return (
        <nav>
            <div className={`${styles.navbar} ${styles[mode]}`}>
                <Link to="/" className={styles.brand}>
                    <h1 className={`${styles.logo} ${styles[mode]}`}>wanime</h1>
                </Link>
                <button className={styles['hamburger']} id="hamburger" onClick={toggleNav}>
                    x
                </button>
                {!user &&
                    <ul className={styles['login-signup']} ref={loginSignup}>
                        <li className={styles['login-signup-item']}>
                            <Link className={`${styles['login-signup-link']} ${styles[mode]}`} to="/login">Login</Link>
                        </li>
                        <li className={styles['login-signup-item']}>
                            <Link className={`${styles['login-signup-link']} ${styles[mode]}`} to="/signup">Signup</Link>
                        </li>
                    </ul>
                }
                {user &&
                    <ul className={styles['loggedin-nav']} ref={loggedinNav}>
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
            <div className={`${styles['sub-navbar']} ${styles[mode]}`} ref={subNav}>
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
