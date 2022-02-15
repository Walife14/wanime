import { Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { v4 as uuid } from 'uuid'
import { useAnimeInteraction } from '../../hooks/useAnimeInteraction'

// firebase
import { db } from '../../firebase/config'
import { doc } from 'firebase/firestore'

// styles
import './AnimeComments.css'

export default function AnimeComments({ anime, id }) {
    const { updateDocument, response } = useFirestore('animes')
    const [newComment, setNewComment] = useState('')
    const { user } = useAuthContext()
    const { removeComment } = useAnimeInteraction(user.uid)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: Timestamp.fromDate(new Date()),
            id: uuid()
        }

        await updateDocument(anime.id, commentToAdd)
        if (!response.error) {
            setNewComment('')
        }
    }

    const handleRemoveComment = (commentId, content, createdAt, displayName, photoURL) => {

        let animeRef = doc(db, 'animes', id)
        let commentObj = {
            id: commentId, content, createdAt, displayName, photoURL
        }

        removeComment(animeRef, commentObj)

    }

    return (
        <>
            <h2>Comments</h2>

            <ul className="anime-comments-list">
                {anime && anime.comments.length > 0 && anime.comments.map(comment => (
                    <li key={comment.id}>
                        <img src={comment.photoURL} alt="" />
                        <div className="anime-comments-content">
                            <p>{comment.displayName}</p>
                            <div>{comment.content}</div>
                        </div>
                        <div className="anime-comment-remove-btn" onClick={() => handleRemoveComment(comment.id, comment.content, comment.createdAt, comment.displayName, comment.photoURL)}>Remove Comment?</div>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit} className="anime-comment-form">
                <label>
                    <span>Add new comment:</span>
                    <textarea
                        required
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                    ></textarea>
                </label>
                <button className="btn">Add Comment</button>
            </form>
        </>
    )
}
