import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { db } from '../firebase/config'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"

// For now this page will only update the user background Image from the user profile page

export const useUpdateProfile = () => {
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const userRef = doc(db, 'users', user.uid)
    const storage = getStorage()

    // -----------

    const updateUser = async (backgroundImage) => {
        setError(null)

        // Store new "backgroundImage" for user in database
        const uploadPath = `backgroundImages/${user.uid}/${user.displayName}'s background image`   
        const storageRef = ref(storage, uploadPath)
        uploadBytes(storageRef, backgroundImage)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(downloadURL => {
                        updateDoc(userRef, {
                            backgroundImage: downloadURL
                        })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // ------------

    const updateFollowing = async (newUser) => {
        setError(null)

        await updateDoc(userRef, {
            following: arrayUnion(newUser)
        })
    }

    return { error, updateUser, updateFollowing }
}