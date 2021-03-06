import { useState, useEffect, useCallback } from 'react'
import { useCollection } from '../../hooks/useCollection'

// styles
import './DiscoverAnime.css'

// To Do
// implement a genre system for each anime added to the database

export default function DiscoverAnime() {
    const [activate, setActivate] = useState(null)
    const [discoveredAnime, setDiscoveredAnime] = useState('')
    const { documents: animes } = useCollection('animes')

    const changeAnime = useCallback(() => {
        if (animes && animes.length > 0) {
            const i = Math.floor(Math.random() * animes.length)
            return setDiscoveredAnime(animes[i].thumbnail)
        }
    }, [animes])

    useEffect(() => {
        changeAnime()
    }, [changeAnime])

    return (
        <div className="discover-anime-container">
            <ul>
                <li>
                    <h2 className="s-title">Discover a new anime!</h2>
                    <p>Hover your mouse over the anime image beside me!</p>
                    <p>And you will be prompted with the option to discover a new 
                        anime or to find out more about the current anime</p>
                </li>
                <li>
                    {!activate && (
                        <div onClick={() => setActivate(true)} className="btn">Click here</div>
                    )}
                    {activate && animes && (
                        <img
                            id="discover-img"
                            src={discoveredAnime}
                            alt="anime img"
                            onClick={changeAnime}
                        />
                    )}
                </li>
                <li>Genre Selector</li>
            </ul>
        </div>
    )
}