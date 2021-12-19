import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useLikeAnime = (uid) => {

    // user ref
    const userRef = doc(db, 'users', uid)

    const likeAnime = async (id, title, thumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail
        }

        await updateDoc(userRef, {
            likedAnime: arrayUnion(animeObj)
        })

    }

    const dislikeAnime = async (id, title, thumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail
        }

        await updateDoc(userRef, {
            likedAnime: arrayRemove(animeObj)
        })

    }
    
    return { likeAnime, dislikeAnime }
}