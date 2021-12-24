import { useState } from 'react'
import { useNewAnime } from '../../hooks/useNewAnime'
import { useHistory } from 'react-router-dom'

// styles
import './AddAnime.css'

export default function AddAnime() {
    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [thumbnailError, setThumbnailError] = useState('')
    const [thumbnailSquare, setThumbnailSquare] = useState('')
    const [thumbnailSquareError, setThumbnailSquareError] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const { error, newAnime } = useNewAnime(null)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        newAnime(title, thumbnail, thumbnailSquare, releaseDate)
        // make this push go to the specific anime in the future
        history.push("/")
    }
    
    const handleFileChangeCover = (e) => {
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

    const handleFileChangeSquare = (e) => {
    setThumbnailSquare(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
        setThumbnailSquareError('Please select a file!')
        return
    }

    if (!selected.type.includes('image')) {
        setThumbnailSquareError('File type must be an image')
        return
    }
    
    if (selected.size > 100000) {
        setThumbnailSquareError('Image file must be less than 100kb')
    }

    setThumbnailSquareError(null)
    setThumbnailSquare(selected)
    console.log("thumbnail updated")
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Crew Application</h2>
            <label className='label'>
                <span>Anime name:</span>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </label>
            <label className='label'>
                <span>Select cover thumbnail</span>
                <input
                    type="file"
                    onChange={handleFileChangeCover}
                />
                {thumbnailError && <div>{thumbnailError}</div>}
            </label>
            <label className='label'>
                <span>Select square thumbnail</span>
                <input
                    type="file"
                    onChange={handleFileChangeSquare}
                />
                {thumbnailSquareError && <div>{thumbnailSquareError}</div>}
            </label>
                <span>Release Date</span>
                <input
                    type="date"
                    onChange={e => setReleaseDate(e.target.value)}
                    value={releaseDate}
                />
            <label>

            </label>
            <button>Signup</button>
            {error && <p>{error}</p>}
        </form>
    )
}
