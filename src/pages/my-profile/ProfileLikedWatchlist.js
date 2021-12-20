import { Link } from 'react-router-dom'

export default function ProfileLikedWatchlist({ currentUser }) {

    return (
        <div className="liked-watchlist-container">
            <div>
                <span className="s-title">Liked Anime</span>
                <ul>
                    {currentUser && currentUser.likedAnime.length === 0 && (
                        <li>
                            <span>No Anime Found</span>
                        </li>
                    )}
                    {currentUser && currentUser.likedAnime.length > 0 && currentUser.likedAnime.slice(0, 3).map(x => (
                        <li key={x.id}>
                            <Link to={`/anime/${x.id}`} className="fav-watchlist-option">
                                <img
                                    src={x.squareThumbnail}
                                    alt={`${currentUser.displayName}'s liked anime`}
                                    className="fav-watchlist-thumbnail"
                                />
                            </Link>
                        </li>
                        
                    ))}
                </ul>
                <Link to="/liked-anime">View All</Link>
            </div>
            <div>
                <span>Watchlist</span>
                <ul></ul>
                <span>View All</span>
            </div>


            {/* <div className="favourite-container">
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
            </div> */}
        </div>
    )
}
