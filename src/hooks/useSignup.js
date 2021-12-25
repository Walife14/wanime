import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { auth, db } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"

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

                // add a document with user uid as id to add additional fields (e.g likedAnime) pt1

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
                                // add a document with user uid as id to add additional fields (e.g likedAnime) pt2

                                setDoc(doc(db, 'users', res.user.uid), {
                                    displayName: username,
                                    photoURL: downloadURL,
                                    online: true,
                                    likedAnime: [],
                                    backgroundImage: null
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