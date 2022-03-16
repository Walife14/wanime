
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// components
import AnimeHeader from './AnimeHeader'
import WhereToWatch from './WhereToWatch'
import Gallery from './AnimeGallery'
import AnimeListComments from './AnimeListComments'
// import AnimeComments from './AnimeComments'

export default function Anime() {
    const { id } = useParams()
    const { document: anime } = useDocument('animes', id)
    
    useEffect(() => {
    }, [])

    return (
        <>
            {anime && (
                <div className="anime-page-container">
                    <AnimeHeader anime={anime} />
                    <WhereToWatch />
                    <Gallery anime={anime} />
                    <AnimeListComments anime={anime} id={id} />
                    {/* <AnimeComments anime={anime} id={id} /> */}
                </div>
            )}
        </>
    )
}