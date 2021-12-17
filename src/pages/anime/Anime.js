import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useLikeAnime } from '../../hooks/useLikeAnime'

// styles
import './Anime.css'

// I need to use a live collection listener to the liked and disliked anime

export default function Anime() {
    const { id } = useParams()
    const { user } = useAuthContext()
    const { document: anime } = useDocument('animes', id)
    const { document: currentUser } = useDocument('users', user.uid)
    const { likeAnime, dislikeAnime } = useLikeAnime(user.uid)

    const handleLike = (e) => {
        if(currentUser.likedAnime.includes(anime.id)) {
            dislikeAnime(anime.id)
        }
        else {
            likeAnime(anime.id)
        }
        console.log(currentUser.likedAnime)
    }

    if(anime) {
        console.log(anime)
    }
    
    return (
        <div className="anime-container">
            <div className="anime-profile">
                <div className="anime-profile-thumb">
                    {anime && (
                        <>
                            <img className="anime-thumbnail" src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                            <span className="anime-thumbnail-like" alt="Anime like button" onClick={handleLike}>{anime.likes}</span> 
                        </>
                    )}
                </div>
                {anime &&
                    <h2>{anime.title}</h2>
                }
            </div>
        </div>
    )
}