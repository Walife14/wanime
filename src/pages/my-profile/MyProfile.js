import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// components
import ProfileHeader from './ProfileHeader'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()
    const { document: currentUser } = useDocument('users', user.uid)
    
    return (
        <>
            <div className="profile-container" user={user}>
                <ProfileHeader />
                <div className="separator" />
                <div className="favourite-watchlist-container">
                    <div className="favourite-container">
                        <p className="fav-watchlist-title">Liked anime</p>
                        <div className="fav-watchlist-option-container">
                            {currentUser && currentUser.likedAnime.length === 0 && (
                                <div className="fav-watchlist-option">
                                    <span>No Anime Found</span>
                                </div>
                            )}
                            {currentUser && currentUser.likedAnime.length > 0 && currentUser.likedAnime.slice(0, 3).map(x => (
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
        </>
    )
}
