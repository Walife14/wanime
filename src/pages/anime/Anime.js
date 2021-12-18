import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// styles
import './Anime.css'

// I need to use a live collection listener to the liked and disliked anime

export default function Anime() {
    const { id } = useParams()
    const { document: anime } = useDocument('animes', id)
    
    return (
        <div className="anime-container">
            <div className="anime-profile">
                <div className="anime-profile-thumb">
                    {anime && 
                        <img className="anime-thumbnail" src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                    }
                </div>
                {anime &&
                    <h2>{anime.title}</h2>
                }
            </div>
        </div>
    )
}