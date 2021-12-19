import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// styles
import './LikedAnime.css'


export default function LikedAnime() {
    const { user } = useAuthContext()
    const { document: currentUser } = useDocument('users', user.uid)

    useEffect(() => {
        if(currentUser) {
            console.log(currentUser)
        }
    }, [currentUser])

    return (
        <div>
            <ul className="anime-list-container">
                {currentUser && currentUser.likedAnime.map((anime) => (
                    <li key={anime.id}>
                        <Link className="anime-card" to={`/anime/${anime.id}`}>
                            <img
                                src={anime.thumbnail}
                                alt={`${anime.title} thumbnail`}
                                className="anime-card-img"
                            />
                            <div className="anime-card-text-container">
                                <span>{anime.title}</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iusto!</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
