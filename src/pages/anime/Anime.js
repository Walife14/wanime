import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// styles
import './Anime.css'

export default function Anime() {
    const { id } = useParams()
    const { document: anime } = useDocument('animes', id)
    const { user } = useAuthContext()

    const handleLike = (e) => {

        console.log(user.uid)
    }

    return (
        <div className="anime-container">
            <div className="anime-profile">
                <div className="anime-profile-thumb">
                    {anime &&
                            <img className="anime-thumbnail" src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                    }
                    <span className="anime-thumbnail-like" alt="Anime like button" onClick={handleLike}></span> 
                </div>
                {anime &&
                    <h2>{anime.title}</h2>
                }
            </div>
        </div>
    )
}