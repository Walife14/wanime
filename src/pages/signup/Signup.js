import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState('')
    const { error, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, username, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)

        if (!selected) {
            setThumbnailError('Please select a file!')
            return
        }

        if (!selected.type.includes('image')) {
            setThumbnailError('File type must be an image')
            return
        }
        
        if (selected.size > 100000) {
            setThumbnailError('Image file must be less than 100kb')
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log("thumbnail updated")
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Crew Application</h2>
            <label className='label'>
                <span>Username:</span>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
            </label>
            <label className='label'>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label className='label'>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <label className='label'>
                <span>Select thumbnail</span>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                {thumbnailError && <div>{thumbnailError}</div>}
            </label>
            <button>Signup</button>
            {error && <p>{error}</p>}
        </form>
    )
}
