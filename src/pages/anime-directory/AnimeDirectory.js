import { useCollection } from '../../hooks/useCollection'
import { Link } from 'react-router-dom'

// styles
import './AnimeDirectory.css'

export default function AnimeDirectory() {
    const { documents: animes } = useCollection('animes')

    return (
        <div>
            <div className="anime-directory-filter">
                Filter by: 
            </div>
            <div className="anime-directory-container">
                <h2>Anime Directory</h2>

                <ul>
                    {animes && animes.map((anime) => (
                        <li className="anime-directory-entry" key={anime.id}>
                            <Link to={`/anime/${anime.id}`}>
                                <span>{anime.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
