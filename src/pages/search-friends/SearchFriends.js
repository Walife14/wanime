import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFindUser } from '../../hooks/useFindUser'

// styles
import './SearchFriends.css'

export default function SearchFriends() {
    const [searchTerm, setSearchTerm] = useState('')
    const [foundUser, setFoundUser] = useState(null)
    const { findPerson } = useFindUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        findPerson('users', ['displayName', '==', searchTerm])
            .then(user => setFoundUser(user))
    }

    useEffect(() => {
        if (foundUser) console.log("WE GOT EM", foundUser)
    }, [foundUser])

    return (
        <div className="search-friends-container">
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
            <h2>Found User</h2>
            {foundUser && (
                <Link to={`/profile/${foundUser.id}`}>
                        <div>
                            <img src={foundUser.photoURL} alt={`${foundUser.displayName}'s thumbnail`} />
                            <span>{foundUser.displayName}</span>
                        </div>
                </Link>
            )}
        </div>
    )
}
