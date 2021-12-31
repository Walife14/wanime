import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useAnimeInteraction = (uid) => {

    // user ref
    const userRef = doc(db, 'users', uid)

    const likeAnime = async (id, title, thumbnail, squareThumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail,
            squareThumbnail
        }

        await updateDoc(userRef, {
            likedAnime: arrayUnion(animeObj)
        })

    }

    const dislikeAnime = async (id, title, thumbnail, squareThumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail,
            squareThumbnail
        }

        await updateDoc(userRef, {
            likedAnime: arrayRemove(animeObj)
        })
    }

    const addToWatchlist = async (id, title, thumbnail, squareThumbnail) => {
        console.log("Anime added to watchlist")

        let animeObj = {
            id,
            title,
            thumbnail,
            squareThumbnail
        }

        await updateDoc(userRef, {
            watchlist: arrayUnion(animeObj)
        })
    }
    
    return { likeAnime, dislikeAnime, addToWatchlist }
}