import { useEffect, useState } from 'react'
import { useFindUser } from '../../hooks/useFindUser'

// styles
import './SearchFriends.css'

export default function SearchFriends() {
    const [searchTerm, setSearchTerm] = useState('')
    const [foundUser, setFoundUser] = useState(null)
    // const { documents: foundUser } = useFindUser(
    //     'users',
    //     ['displayName', '==', searchTerm]
    //     )
    const { findPerson } = useFindUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        findPerson('users', ['displayName', '==', searchTerm])
            .then(e => console.log("++", e))
    }

    useEffect(() => {
        if (foundUser) console.log(foundUser)
    }, [foundUser])

    return (
        <div>
            <h2>Search for a friend</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button>Find</button>
            </form>
            <p>
            </p>
        </div>
    )
}
