import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useAnimeInteraction = (uid) => {

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

    const addToWatchlist = async (id, title, thumbnail) => {
        console.log("Anime added to watchlist")

        let animeObj = {
            id,
            title,
            thumbnail
        }

        await updateDoc(userRef, {
            watchlist: arrayUnion(animeObj)
        })
    }

    const removeFromWatchlist = async (id, title, thumbnail) => {
        console.log("Anime removed from watchlist")

        let animeObj = {
            id,
            title,
            thumbnail
        }

        await updateDoc(userRef, {
            watchlist: arrayRemove(animeObj)
        })
    }

    const removeComment = async (animeRef, commentObj) => {
        console.log("Trying to delete a comment")

        console.log(commentObj)

        await updateDoc(animeRef, {
            comments: arrayRemove(commentObj)
        })
        
    }
    
    return { likeAnime, dislikeAnime, addToWatchlist, removeFromWatchlist, removeComment }
}