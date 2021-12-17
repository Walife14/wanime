import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()

    return (
        <div>
            <div className='profile-container'>
                <div className='profile-img-info'>
                    <img
                        className='profile-img'
                        src={user.photoURL}
                        alt=""
                    />
                    <div className='profile-info'>
                        <h2>{user.displayName}</h2>
                    </div>
                </div>
                <div className="separator" />
                <div className='favourite-watchlist-container'>
                    <div className='favourite-container'>
                        <p className='fav-watchlist-title'>Fav anime</p>
                        <div className='fav-watchlist-option-container'>
                            <div className='fav-watchlist-option'></div>
                            <div className='fav-watchlist-option'></div>
                            <div className='fav-watchlist-option'></div>
                        </div>
                        <p className='view-all-option'>View All</p>
                    </div>
                    <div className='watchlist-container'>
                        <p className="fav-watchlist-title">Watchlist</p>
                        <div className="fav-watchlist-option-container">
                            <div className='fav-watchlist-option'></div>
                            <div className='fav-watchlist-option'></div>
                            <div className='fav-watchlist-option'></div>
                        </div>
                        <p className="view-all-option">View All</p>
                    </div>
                </div>
                <div className="separator" />
            </div>
        </div>
    )
}
