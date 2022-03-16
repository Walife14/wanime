import AnimeHeaderInteraction from './AnimeHeaderInteraction'

// styles
import './Anime.css'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function AnimeHeader({ anime }) {
    const { user } = useAuthContext()

    return (
        <>
            <div className="anime-page-header">
                <img src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                <div>
                    <h1>{anime.title}</h1>
                    <small>Released: {anime.releaseDate}</small>
                    <p>Description... <span>By: Creators Name</span></p>
                </div>
            </div>
            {user && (
                <AnimeHeaderInteraction anime={anime} user={user} />
            )}
        </>
    )
}
