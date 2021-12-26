import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useReducer, useEffect, useState } from "react"
import { db } from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
        return { isPending: true, document: null, success: false, error: null }
    case 'ERROR':
        return { isPending: false, document: null, success: false, error: action.payload }
    case 'UPDATED_DOCUMENT':
        return { isPending: false, document: action.payload, success: true, error: null }
    default:
      return state
  }
}

export const useFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // update documents
  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' })

    const ref = doc(db, c, id)

    try {
        const updatedDocument = await updateDoc(ref, {
            comments: arrayUnion(updates)
        })
        dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDocument})
        return updatedDocument
    }
    catch (err) {
        dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
        return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { updateDocument, response }

}