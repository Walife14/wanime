import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

// firebase
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// components
import TheoriesForm from './TheoriesForm'

export default function Theories() {
    const { user } = useAuthContext()
    const { documents: theories } = useCollection(
        'theories',
        ['uid', '==', user.uid]
    )

    const handleClick = (id) => {
        const docRef = doc(db, 'theories', id)
        deleteDoc(docRef)
    }

    return (
        <div>
            <ul>
                {theories && theories.map(theory => (
                    <li key={theory.id} onClick={() => handleClick(theory.id)}>
                        {theory.title}
                    </li>
                ))}
            </ul>
            <TheoriesForm />
        </div>
    )
}
