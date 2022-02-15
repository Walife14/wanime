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

    const newAnime = async (title, thumbnail, releaseDate, description, comments) => {
        setError(null)

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
                                    releaseDate,
                                    descriptions: [],
                                    comments: []
                                })
                            })

                    })
        
        
    }

    return { error, newAnime }
}