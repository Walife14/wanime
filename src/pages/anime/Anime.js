import { useEffect, useState } from 'react'
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
    const [liked, setLiked] = useState('')

    const handleLike = (e) => {
        if(currentUser) {
            if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
                dislikeAnime(anime.id, anime.title, anime.thumbnail)
            }
            else {
                likeAnime(anime.id, anime.title, anime.thumbnail)
            }
        }
    }

    useEffect(() => {
        if(currentUser) {
            if(currentUser.likedAnime.filter(e => e.id === anime.id).length > 0) {
                setLiked('liked')
            }
            else {
                setLiked('not liked!')
            }
        }
    }, [currentUser, anime])

    return (
        <div className="anime-container">
            <div className="anime-profile">
                <div className="anime-profile-thumb">
                    {anime && (
                        <>
                            <img className="anime-thumbnail" src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                            <span className="anime-thumbnail-like" alt="Anime like button" onClick={handleLike}>
                                {anime && <>{liked}</>}
                            </span>
                        </>
                    )}
                </div>
                {anime &&
                    <h2>{anime.title}</h2>
                }
            </div>
            <div>
                {anime && <p>{anime.ranking}</p>}
            </div>
        </div>
    )
}