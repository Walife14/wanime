import { useState, useEffect } from 'react'
import { useAnimeInteraction } from "../../hooks/useAnimeInteraction"
import { useDocument } from "../../hooks/useDocument"


export default function AnimeHeaderInteraction({ anime, user }) {
    const { removeFromWatchlist, addToWatchlist, likeAnime, dislikeAnime } = useAnimeInteraction(user.uid)
    const { document: currentUser } = useDocument('users', user.uid)
    const [isLiked, setIsLiked] = useState('')
    const [inWatchlist, setInWatchlist] = useState('')

    useEffect(() => {

        // Changes the value of the like button to Like or Unlike
        if (currentUser) {
            if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
                setIsLiked('Unlike')
            }
            else {
                setIsLiked('Like')
            }
        // Changes the value of the watchlist button to "Add to Watchlist" or "Remove From Watchlist"
            if(currentUser.watchlist.filter(e => e.id === anime.id).length > 0) {
                setInWatchlist('Remove From Watchlist')
            }
            else {
                setInWatchlist('Add To Watchlist')
            }
        }
    }, [currentUser, anime.id])

    const handleLike = () => {
        if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
            dislikeAnime(anime.id, anime.title, anime.thumbnail)
        }
        else {
            likeAnime(anime.id, anime.title, anime.thumbnail)
        }
    }

    const handleAddToWatchlist = () => {
        if (currentUser.watchlist.filter(e => e.id === anime.id).length > 0) {
            removeFromWatchlist(anime.id, anime.title, anime.thumbnail)
        }
        else {
            addToWatchlist(anime.id, anime.title, anime.thumbnail)
        }
    }

    return (
        <div className="anime-page-header-interact">
            <span onClick={handleLike}> {isLiked} </span>
            <span onClick={handleAddToWatchlist}> {inWatchlist} </span>
        </div>
    )
}
