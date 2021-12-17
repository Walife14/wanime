import { useParams } from 'react-router-dom'
// import { useCollection } from '../../hooks/useCollection'
import { useDocument } from '../../hooks/useDocument'

// styles
import './Anime.css'

export default function Anime() {
    const { id } = useParams()
    // const { documents: anime } = useCollection('animes')
    const { document: anime } = useDocument('animes', id)
    
    if (anime) {
        console.log(anime)
    }

    return (
        <div>
            {anime && <div>{anime.title}</div>}
        </div>
    )
}
