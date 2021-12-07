import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, username)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Crew Application</h2>
            <label className={styles.label}>
                <span>Username:</span>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
            </label>
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
            <button>Signup</button>
            {error && <p>{error}</p>}
        </form>
    )
}
