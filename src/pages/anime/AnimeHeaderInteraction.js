import { useState, useEffect } from 'react'
import { useAnimeInteraction } from "../../hooks/useAnimeInteraction"
import { useDocument } from "../../hooks/useDocument"


export default function AnimeHeaderInteraction({ anime, user }) {
    const { likeAnime, dislikeAnime } = useAnimeInteraction(user.uid)
    const { document: currentUser } = useDocument('users', user.uid)
    const [isLiked, setIsLiked] = useState('')

    useEffect(() => {

        // Changes the value of the like button to Like or Unlike
        if (currentUser) {
            if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
                setIsLiked('Unlike')
            }
            else {
                setIsLiked('Like')
            }
        }
    }, [currentUser, anime.id])

    const handleLike = () => {
        if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
            dislikeAnime(anime.id, anime.title, anime.thumbnail, anime.squareThumbnail)
            dislikeAnime(anime.id, anime.title, anime.thumbnail)
        }
        else {
            likeAnime(anime.id, anime.title, anime.thumbnail, anime.squareThumbnail)
            likeAnime(anime.id, anime.title, anime.thumbnail)
        }
    }

    return (
        <div className="anime-page-header-interact">
            <span onClick={handleLike}> {isLiked} </span>
            <span>Add To Watchlist</span>
        </div>
    )
}
