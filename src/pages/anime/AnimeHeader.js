import { useEffect } from 'react'

// styles
import './Anime.css'

export default function AnimeHeader({ anime }) {

    useEffect(() => {
        console.log(anime)
    }, [anime])

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
            <div className="anime-page-header-interact">
                <span>Like</span>
                <span>Add To Watchlist</span>
                <span>Rating</span>
            </div>
        </>
    )
}
