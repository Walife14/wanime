import AnimeHeaderInteraction from './AnimeHeaderInteraction'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'
import { Timestamp } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// components
import FormModal from '../../components/FormModal'

// styles
import './Anime.css'

export default function AnimeHeader({ anime }) {
    const { user } = useAuthContext()
    const { updateDocumentDescriptions, response } = useFirestore('animes')
    const [formModalTrigger, setFormModalTrigger] = useState(false)
    const [newDescription, setNewDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const descriptionToAdd = {
            createdBy: {
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid
            },
            description: newDescription,
            createdAt: Timestamp.fromDate(new Date()),
            id: uuid()
        }

        await updateDocumentDescriptions(anime.id, descriptionToAdd)

        if (!response.error) {
            setNewDescription('')
        }
    }

    return (
        <>
            <div className="anime-page-header">
                <img src={anime.thumbnail} alt={`${anime.title} thumbnail`} />
                <div>
                    <h1>{anime.title}</h1>
                    <small>Released: {anime.releaseDate}</small>
                    {anime.descriptions.length === 0 && (
                        <p>There are no descriptions yet!</p>
                    )}
                    {anime.descriptions.length > 0 && (
                        <>
                            <p>{anime.descriptions[0].description}</p>
                            <p>Description created {formatDistanceToNow(anime.descriptions[0].createdAt.toDate(), { addSuffix: true })} by <Link to={`/profile/${anime.descriptions[0].createdBy.uid}`}><b>{anime.descriptions[0].createdBy.displayName}</b></Link></p>
                            <Link to={`/anime/descriptions/${anime.id}`}>View All Descriptions</Link>
                        </>
                    )}
                    {user && (
                        <span onClick={() => setFormModalTrigger(true)}>Click Here To Add A New Description</span>
                    )}
                    <FormModal trigger={formModalTrigger} setFormModalTrigger={setFormModalTrigger}>
                        {formModalTrigger && (
                            <>
                                <h3>Descriptions</h3>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        <span>Add new description:</span>
                                        <textarea
                                            required
                                            onChange={(e) => setNewDescription(e.target.value)}
                                            value={newDescription}
                                        ></textarea>
                                    </label>
                                    <button className="btn">Add New Description</button>
                                </form>
                            </>
                        )}
                    </FormModal>
                </div>
            </div>
            {user && (
                <AnimeHeaderInteraction anime={anime} user={user} />
            )}
        </>
    )
}
