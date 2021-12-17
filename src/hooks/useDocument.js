import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState, useRef } from "react"
import { db } from "../firebase/config"

export const useDocument = (c, _q) => {
const [document, setDocument] = useState(null)

    const q = useRef(_q).current

    useEffect(() => {

        const docRef = doc(db, c, q)

        getDoc(docRef)
            .then((doc) => {
                setDocument({ ...doc.data(), id: doc.id })
            })

    }, [c, q])



    
    return { document }
}