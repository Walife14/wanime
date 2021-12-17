import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'

// styles
import styles from './ThemeSelector.module.css'

export default function ThemeSelector() {

    const { changeMode, mode } = useTheme()
    
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={`${styles['theme-container']} ${styles[mode]}`}>
            <img
                src={modeIcon}
                alt=""
                onClick={ toggleMode }
                className={styles.modebtn}
                style={ mode === 'dark' ? { filter: 'invert(80%)' } : { filter: 'invert(20%)'}}
            />
        </div>
    )
}