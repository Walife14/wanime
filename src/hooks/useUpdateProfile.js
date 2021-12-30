import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { db } from '../firebase/config'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"

// For now this page will only update the user background Image from the user profile page

export const useUpdateProfile = () => {
    const { user } = useAuthContext()

    const userRef = doc(db, 'users', user.uid)
    const storage = getStorage()

    // -----------

    const updateUser = async (backgroundImage) => {

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

    const updateFollowing = async (newUser, currentUser, followunfollow) => {

        // update current user Following field
        await updateDoc(userRef, {
            following: arrayUnion(newUser)
        })

        // update followed users Followers field
        // their ref
        const newUserRef = doc(db, 'users', newUser.id)
        
        await updateDoc(newUserRef, {
            followers: arrayUnion(currentUser)
        })
    }

    return { updateUser, updateFollowing }
}