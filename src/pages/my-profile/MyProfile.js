import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()
    const { documents: animes } = useCollection('animes')

    if (animes) console.log(animes)

    return (
        <div>
            <div className='profile-container'>
                <div className='profile-img-info'>
                    <img
                        className='profile-img'
                        src={user.photoURL}
                        alt={`${user.displayName}'s thumbnail`}
                    />
                    <div className='profile-info'>
                        <h2>{user.displayName}</h2>
                    </div>
                </div>
                <div className="separator" />
                <div className='favourite-watchlist-container'>
                    <div className='favourite-container'>
                        <p className='fav-watchlist-title'>Liked anime</p>
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
