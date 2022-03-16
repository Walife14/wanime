import { useAnimeInteraction } from '../hooks/useAnimeInteraction'

// firebase
import { db } from '../firebase/config'
import { doc } from 'firebase/firestore'

export default function RemoveComment({ user, id, comment }) {
    const { removeComment } = useAnimeInteraction(user.uid)

    // Remove Comment
    const handleRemoveComment = (commentId, content, createdAt, displayName, photoURL) => {

        let animeRef = doc(db, 'animes', id)
        let commentObj = {
            id: commentId, content, createdAt, displayName, photoURL
        }

        removeComment(animeRef, commentObj)
    }

    return (
        <div className="anime-comment-remove-btn" onClick={() => handleRemoveComment(comment.id, comment.content, comment.createdAt, comment.displayName, comment.photoURL)}>Remove Comment?</div>
    )
}
