import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// styles
import './AnimeDescriptionList.css'

export default function AnimeDescriptionList() {
    const { id } = useParams()
    const { document: anime } = useDocument('animes', id)

    return (
        <div className="anime-description-page-container">
            {anime && (
                <>
                    <h2>{anime.title} Descriptions</h2>
                    <ul>
                        {anime.descriptions.length > 0 && anime.descriptions.map((desc) => (
                            <li key={desc.id}>
                                <img src={desc.createdBy.photoURL} alt={`${desc.createdBy.displayName}'s thumbnail`} />
                                <div>
                                    <span>Created by <Link to={`/profile/${desc.createdBy.uid}`}>{desc.createdBy.displayName}</Link></span>
                                    <p>{desc.description}</p>
                                    <span>Created {formatDistanceToNow(desc.createdAt.toDate(), { addSuffix: true })}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {anime.descriptions.length === 0 && (
                        <span>There are no descriptions for this anime yet!</span>
                    )}

                </>
            )}
        </div>
    )
}
