import { useState } from 'react'

// styles
import './SearchFriends.css'

export default function SearchFriends() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
