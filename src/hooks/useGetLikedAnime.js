// import { useEffect, useRef, useState } from "react";
// import { db } from "../firebase/config";
// import { useDocument } from "./useDocument";
// import { useAuthContext } from "./useAuthContext";

// // firebase imports
// import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'

// export const useGetLikedAnime = (c) => {
//     const { user } = useAuthContext()
//     const { document: currentUser } = useDocument('users', user.uid)
//     const [documents, setDocuments] = useState(null)

//     // let q = null

//     // if (currentUser) {
//     //     q = ['id', 'array-contains-any', [currentUser.likedAnime[0], currentUser.likedAnime[1]]]
//     // }
//     // if (q) {
//     //     console.log(q)
//     // }

//     useEffect(() => {
//         // let ref = collection(db, c)

//         // if (q) {
//         //     ref = query(ref, where(...q))
//         // }
//         let unsub = null

//         if(currentUser) {
//             unsub = onSnapshot(doc(db, c, currentUser.likedAnime[0]), (doc) => {
//                 console.log("current data: ", doc.data())
//             })
//         }

//         // const unsub = onSnapshot(ref, (snapshot) => {
//         //     let results = []
//         //     snapshot.docs.forEach(doc => {
//         //         results.push({ ...doc.data(), id: doc.id })
//         //     })
//         //     setDocuments(results)
//         // })

//         return () => unsub()
//     }, [c])

//     return { documents }
// }
