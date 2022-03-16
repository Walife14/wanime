import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Timestamp } from 'firebase/firestore'
import { useFirestore } from '../../hooks/useFirestore'
import { v4 as uuid } from 'uuid'

// components
import RemoveComment from '../../components/RemoveComment'

// styles
import './AnimeComments.css'

export default function AnimeListComments({ anime, id }) {

    const { user } = useAuthContext()
    const { updateDocument, response } = useFirestore('animes')
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        if (user) {
            console.log("we have a user")
            console.log(user)
        }
    }, [user])

    // Submit Comment
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
                        {user && (
                            <RemoveComment user={user} id={id} comment={comment} />
                        )}
                    </li>
                ))}
                {user && (
                    <>
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
                )}
            </ul>

        </>
    )
}
