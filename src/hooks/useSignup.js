import { useState } from "react"
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = (email, password, username) => {
        setError(null)
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                updateProfile(res.user, {
                    displayName: username
                }).then(() => {
                    console.log("added the name to the user: ", username)
                }).catch((err) => {
                    console.log(err)
                })
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .catch((err) => {
                setError(err.message)
            })

    }

    return { error, signup }
}