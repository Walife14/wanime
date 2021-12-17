import { useCollection } from '../../hooks/useCollection'

// styles
import './AnimeDirectory.css'

export default function AnimeDirectory() {
    const { documents: animes } = useCollection(
        'animes'
    )

    return (
        <div>
            <ul>
                {animes && animes.map((anime) => (
                    <li key={animes.id}>
                        <span>{anime.title}</span>
                        <img src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
