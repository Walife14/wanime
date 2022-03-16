import { Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

export default function AnimeDescription({ descriptions, anime }) {
    const { updateDocumentDescriptions, response } = useFirestore('animes')
    const [toggle, setToggle] = useState(false)
    const [newDescription, setNewDescription] = useState('')
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const descriptionToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
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
            {descriptions && descriptions.length > 0 && (
                <p className="anime-description">
                    {descriptions[0].description}
                    <span onClick={() => console.log("Need to add link to a page with more user descriptions about this anime")}>More Descriptions</span>
                    <span>Written by: {descriptions[0].displayName}</span>
                </p>
            )}
            {descriptions && descriptions.length === 0 && (
                <p>There are no descriptions yet!</p>
            )}
            {descriptions && descriptions.length === 0 && user && (
                <>
                    Click <span onClick={() => setToggle(true)}><b>here</b></span> to add the first description!
                </>
            )}
            {toggle && (
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
            )}
        </>
    )
}
