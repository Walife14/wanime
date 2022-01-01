import { Link } from 'react-router-dom'

export default function ProfileLikedWatchlist({ currentUser }) {

    return (
        <div className="liked-watchlist-container">
            <div>
                <span className="s-title">Liked Anime</span>
                <ul>
                    {currentUser && currentUser.likedAnime.length === 0 && (
                        <li>
                            <span>No Anime In Your Liked List</span>
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
                <span className="s-title">Watchlist</span>
                <ul>
                    {currentUser && currentUser.watchlist.length === 0 && (
                        <li>
                            <span>No Anime In Your Watchlist</span>
                        </li>
                    )}
                    {currentUser && currentUser.watchlist.length > 0 && currentUser.watchlist.slice(0, 3).map(x => (
                        <li key={x.id}>
                            <Link to={`anime/${x.id}`} className="fav-watchlist-option">
                                <img
                                    src={x.squareThumbnail}
                                    alt={`${currentUser.displayName}'s watchlist anime`}
                                    className="fav-watchlist-thumbnail"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                <span>View All</span>
            </div>
        </div>
    )
}
