import { Link } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'

// styles
import './Thisweek.css'

export default function ThisWeek() {

    const { documents: animes } = useCollection(
        'animes'
    )

    return (
        <div className="this-week-container">
        <h1>This Week</h1>
        <ul>
            {animes && animes.map(anime => (
                <li key={anime.id}>
                    <Link to={`/anime/${anime.id}`}>
                        <img src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}
