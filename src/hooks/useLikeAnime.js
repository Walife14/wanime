import { arrayRemove, arrayUnion, doc, increment, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useLikeAnime = (uid) => {

    // user ref
    const userRef = doc(db, 'users', uid)

    const likeAnime = async (id) => {
        await updateDoc(userRef, {
            likedAnime: arrayUnion(id)
        })

        const animeRef = doc(db, 'animes', id)
        await updateDoc(animeRef, {
            likes: increment(1)
        })
    }

    const dislikeAnime = async (id) => {
        await updateDoc(userRef, {
            likedAnime: arrayRemove(id)
        })

        const animeRef = doc(db, 'animes', id)
        await updateDoc(animeRef, {
            likes: increment(-1)
        })
    }
    
    return { likeAnime, dislikeAnime }
}