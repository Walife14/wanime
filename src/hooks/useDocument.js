import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState, useRef } from "react"
import { db } from "../firebase/config"

export const useDocument = (c, _q) => {
    
    const [document, setDocument] = useState(null)

    const q = useRef(_q).current

    useEffect(() => {

        const docRef = doc(db, c, q)

        // fetch update once
        // getDoc(docRef)
        //     .then((doc) => {
        //         setDocument({ ...doc.data(), id: doc.id })
        //     })

        // fetch realtime updates
        const unsub = onSnapshot(docRef, (snapshot) => {
            setDocument({ ...snapshot.data(), id: snapshot.id  })
        })

        return () => unsub()

    }, [c, q])
    
    return { document }
}