import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

export const useFindUser = () => {
    // const [user, setUser] = useState(null)

    const findPerson = async (c, q) => {

        let ref = collection(db, c)

        ref = query(ref, where(...q))

        const querySnapshot = await getDocs(ref)

        // console.log(querySnapshot)

        let results = []

        querySnapshot.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id })
            console.log(doc.id, " => ", doc.data())
        })

        const user = results[0]

        // let ref = collection(db, c)

        // ref = query(ref, where(..._q))

        // onSnapshot(ref, (snapshot) => {
        //     snapshot.docs.forEach(doc => {
        //         setUser(({ ...doc.data(), id: doc.id }))
        //     })
        // })

        // console.log(user)

        // const querySnapshot = await getDocs(que)
        // querySnapshot.forEach((doc) => {
        //     setUser({ ...doc.data(), id: doc.id })
        // })

        return user
    }

    return { findPerson }
}