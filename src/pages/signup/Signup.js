import styles from './Signup.module.css'

export default function Signup() {
    return (
        <form class={styles.form}>
            <h2>Crew Application</h2>
            <label className={styles.label}>
                <span>Username:</span>
                <input
                    type="text"
                    required
                />
            </label>
            <label className={styles.label}>
                <span>Email:</span>
                <input
                    type="email"
                    required
                />
            </label>
            <label className={styles.label}>
                <span>Password:</span>
                <input
                    type="password"
                    required
                />
            </label>
            <button>Signup</button>
        </form>
    )
}
