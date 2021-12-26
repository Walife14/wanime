import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useLikeAnime } from '../../hooks/useLikeAnime'

// components
import AnimeComments from './AnimeComments.js'

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
                dislikeAnime(anime.id, anime.title, anime.thumbnail, anime.squareThumbnail)
            }
            else {
                likeAnime(anime.id, anime.title, anime.thumbnail, anime.squareThumbnail)
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
                <div className="anime-profile-content">
                    <div className="anime-profile-header">
                        {anime && (
                            <>
                                <h2>{anime.title}</h2>
                                <small>Released: {anime.releaseDate}</small>
                            </>
                        )}
                    </div>
                    {anime &&
                        <div className="anime-profile-description-container">
                            <p>{anime.description}</p>
                        </div>
                    }
                </div>
            </div>
            <div className="anime-where-to-watch-container">
                <span>Where to Watch</span>
            </div>
            <div className="anime-gallery-container">
                <span>Anime Gallery</span>
                <div>
                    {/* create a modal for whenever a user clicks an image */}
                    {anime && (
                        <>
                        <div>
                            <img
                                onClick={e => console.log(e.target.src)}
                                src={anime.thumbnail}
                                alt={`${anime.title}'s thumbnail`}
                            />
                        </div>
                        <div>
                            <img
                                src={anime.squareThumbnail}
                                alt={`${anime.title}'s square thumbnail`}
                            />
                        </div>
                        </>
                    )}
                </div>
            </div>
            <div>
                Theories
            </div>
            <div>
                <AnimeComments anime={anime} />
            </div>
        </div>
    )
}