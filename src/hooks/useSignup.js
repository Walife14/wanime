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
                    .then(snapshot => {
                        getDownloadURL(snapshot.ref)
                            .then(url => {
                                updateProfile(res.user, {
                                    photoURL: url,
                                    displayName: username
                                })

                                // creating a firestore db document for the user

                                setDoc(doc(db, 'users', res.user.uid), {
                                    displayName: username,
                                    photoURL: url,
                                    online: true,
                                    likedAnime: [],
                                    backgroundImage: null,
                                    followers: [],
                                    following: [],
                                    watchlist: []
                                })
                            })
                    })
                    .then(() => {
                        dispatch({ type: 'LOGIN', payload: res.user })
                    })
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, signup }
}