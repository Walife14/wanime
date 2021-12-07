import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import styles from './MyProfile.module.css'

export default function MyProfile() {
    const { user } = useAuthContext()

    return (
        <div>
            <div className={styles['profile-container']}>
                <div className={styles['profile-img-info']}>
                    <img
                        className={styles['profile-img']}
                        src=""
                        alt=""
                    />
                    <div className={styles['profile-info']}>
                        <h2>{user.displayName}</h2>
                    </div>
                </div>
                <div class="separator" />
                <div className={styles['favourite-watchlist-container']}>
                    <div className={styles['favourite-container']}>
                        <p className={styles['favourite-text']}>Fav anime</p>
                        <div className={styles['favourite-option-container']}>
                            <div className={styles['favourite-option']}></div>
                            <div className={styles['favourite-option']}></div>
                            <div className={styles['favourite-option']}></div>
                        </div>
                        <p className={styles['favourite-view-all']}>View All</p>
                    </div>
                    <div className={styles['watchlist-container']}>watchlist</div>
                </div>
                <div class="separator" />
            </div>
        </div>
    )
}
