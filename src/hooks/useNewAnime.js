import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

export const useNewAnime = () => {
    const [error, setError] = useState(null)

    // collection ref
    const colRef = collection(db, 'animes')

    // thumbnail
    const storage = getStorage()

    const newAnime = async (title, thumbnail, thumbnailSquare, releaseDate, description, comments) => {
        setError(null)

        let squareThumbnail = ''

        const uploadSquarePath = `anime/thumbnailSquare/${thumbnailSquare.name}`
        const storageSquareRef = ref(storage, uploadSquarePath)
        await uploadBytes(storageSquareRef, thumbnailSquare)
                    .then((snapshot) => {
                        console.log(snapshot)
                        getDownloadURL(snapshot.ref)
                            .then((downloadURL) => {
                                squareThumbnail = downloadURL
                            })
                    })

        const uploadPath = `anime/thumbnail/${thumbnail.name}`
        const storageRef = ref(storage, uploadPath)
        await uploadBytes(storageRef, thumbnail)
                    .then((snapshot) => {
                        console.log(snapshot)
                        getDownloadURL(snapshot.ref)
                            .then((downloadURL) => {
                                addDoc(colRef, {
                                    thumbnail: downloadURL,
                                    title,
                                    squareThumbnail,
                                    releaseDate,
                                    description,
                                    comments: []
                                })
                            })

                    })
        
        
    }

    return { error, newAnime }
}