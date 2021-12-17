import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useCollection } from '../../hooks/useCollection'

// styles
import './DiscoverAnime.css'

// To Do
// implement a genre system for each anime added to the database

export default function DiscoverAnime() {
    const { documents: animes } = useCollection('animes')
    const [imgSrc, setImgSrc] = useState('')
    
    const changeImg = () => {
        // grab the image for discover
        const img = document.querySelector('#discover-img')
        // get random integer based on the length of animes collection
        const i = Math.floor(Math.random() * animes.length)
        // add new src to the img
        img.src = animes[i].thumbnail

    }

    return (
        <div className="discover-anime-container">
            <ul>
                <li>
                    <h2>Discover a new anime!</h2>
                    <p>Hover your mouse over the anime image beside me!</p>
                    <p>And you will be prompted with the option to discover a new 
                        anime or to find out more about the current anime</p>
                </li>
                <li>
                    {animes && (
                        <img id="discover-img" onClick={changeImg} src={animes[0].thumbnail} />
                    )}
                </li>
                <li>Genre Selector</li>
            </ul>
        </div>
    )
}