import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()
    const { document: currentUser } = useDocument('users', user.uid)
    
    return (
        <div>
            <div className="profile-container">
                <div className="profile-img-info">
                    <img
                        className="profile-img"
                        src={user.photoURL}
                        alt={`${user.displayName}'s thumbnail`}
                    />
                    <div className="profile-info">
                        <h2>{user.displayName}</h2>
                    </div>
                </div>
                <div className="separator" />
                <div className="favourite-watchlist-container">
                    <div className="favourite-container">
                        <p className="fav-watchlist-title">Liked anime</p>
                        <div className="fav-watchlist-option-container">
                            {currentUser && currentUser.likedAnime.slice(0, 3).map(x => (
                                <Link to={`/anime/${x.id}`} className="fav-watchlist-option">
                                    <img
                                        src={x.thumbnail}
                                        alt={`${currentUser.displayName}'s liked anime`}
                                        className="fav-watchlist-thumbnail"
                                    />
                                </Link>
                            ))}
                        </div>
                        <Link to="/liked-anime" className='view-all-option'>View All</Link>
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
