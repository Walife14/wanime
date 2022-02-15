import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useAnimeInteraction = (uid) => {

    // user ref
    const userRef = doc(db, 'users', uid)

    const likeAnime = async (id, title, thumbnail, squareThumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail
        }

        await updateDoc(userRef, {
            likedAnime: arrayUnion(animeObj)
        })

    }

    const dislikeAnime = async (id, title, thumbnail, squareThumbnail) => {

        let animeObj = {
            id,
            title,
            thumbnail
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
            thumbnail
        }

        await updateDoc(userRef, {
            watchlist: arrayUnion(animeObj)
        })
    }

    const removeComment = async (animeRef, commentObj) => {
        console.log("Trying to delete a comment")

        console.log(commentObj)

        await updateDoc(animeRef, {
            comments: arrayRemove(commentObj)
        })
        
    }
    
    return { likeAnime, dislikeAnime, addToWatchlist, removeComment }
}