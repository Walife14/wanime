import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

// firebase imports
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function TheoriesForm() {
    const [newTheory, setNewTheory] = useState('')
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const ref = collection(db, 'theories')

        await addDoc(ref, {
            title: newTheory,
            uid: user.uid
        })

        setNewTheory('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Create theory:</span>
                <input
                    type="text"
                    onChange={(e) => setNewTheory(e.target.value)}
                    value={newTheory}
                    required
                />
            </label>
            <button>Add</button>
        </form>
    )
}
