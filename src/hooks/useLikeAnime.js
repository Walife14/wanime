import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useLikeAnime = (uid) => {

    // user ref
    const userRef = doc(db, 'users', uid)

    const likeAnime = async (id) => {
        await updateDoc(userRef, {
            likedAnime: arrayUnion(id)
        })

    }

    const dislikeAnime = async (id) => {
        await updateDoc(userRef, {
            likedAnime: arrayRemove(id)
        })

    }
    
    return { likeAnime, dislikeAnime }
}