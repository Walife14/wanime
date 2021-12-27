import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useFindUser = () => {
    // const [user, setUser] = useState(null)

    const findPerson = async (c, q) => {

        let ref = collection(db, c)

        ref = query(ref, where(...q))

        const querySnapshot = await getDocs(ref)

        let result = null

        querySnapshot.forEach(doc => {
            result = ({ id: doc.id, ...doc.data() })
        })

        return result
    }

    return { findPerson }
}