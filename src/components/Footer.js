import { useTheme } from '../hooks/useTheme'

// styles
import styles from './Footer.module.css'

export default function Footer() {

    const { mode } = useTheme()

    return (
        <footer className={`${styles.footer} ${styles[mode]}`}>
            made by wanime
        </footer>
    )
}