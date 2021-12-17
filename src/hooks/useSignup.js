import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

// TO ADD
// create an isPending state

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const storage = getStorage()

        const signup = async (email, password, username, thumbnail) => {
        setError(null)

        // uploading thumbnail


        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`   
                const storageRef = ref(storage, uploadPath)
                uploadBytes(storageRef, thumbnail)
                    .then((snapshot) => {
                        console.log(snapshot)
                        getDownloadURL(snapshot.ref)
                            .then((downloadURL) => {
                                updateProfile(res.user, {
                                    photoURL: downloadURL
                                })
                            })
                    })
                    updateProfile(res.user, {
                        displayName: username
                    })
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, signup }
}