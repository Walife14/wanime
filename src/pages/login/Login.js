import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

// styles
import styles from './Login.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, login } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label className={styles.label}>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label className={styles.label}>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <button>Login</button>
            {error && <p>{error}</p>}
        </form>
    )
}
