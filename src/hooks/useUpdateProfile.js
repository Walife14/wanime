import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { db } from '../firebase/config'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { doc, updateDoc } from "firebase/firestore"

// For now this page will only update the user background Image from the user profile page

export const useUpdateProfile = () => {
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const userRef = doc(db, 'users', user.uid)
    const storage = getStorage()

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



    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((res) => {

    //         // add a document with user uid as id to add additional fields (e.g likedAnime) pt1

    //         const uploadPath = `backgroundImages/${res.user.uid}/${backgroundImage.name}`   
    //         const storageRef = ref(storage, uploadPath)
    //         uploadBytes(storageRef, thumbnail)
    //             .then((snapshot) => {
    //                 console.log(snapshot)
    //                 getDownloadURL(snapshot.ref)
    //                     .then((downloadURL) => {
    //                         updateProfile(res.user, {
    //                             photoURL: downloadURL
    //                         })
    //                         // add a document with user uid as id to add additional fields (e.g likedAnime) pt2

    //                         setDoc(doc(db, 'users', res.user.uid), {
    //                             displayName: username,
    //                             photoURL: downloadURL,
    //                             online: true,
    //                             likedAnime: [],
    //                             backgroundImage: null
    //                         })

    //                     })
    //             })
    //     })
    //     .catch((err) => {
    //         setError(err.message)
    //     })
    // }

    return { error, updateUser }
}