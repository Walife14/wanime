import { useState } from 'react'
import { useUpdateProfile } from '../../hooks/useUpdateProfile'

export default function ProfileHeader({ user, currentUser }) {
    const [displayHeaderForm, setDisplayHeaderForm] = useState(false)
    const [backgroundImage, setBackgroundImage] = useState('')
    const [backgroundImageError, setBackgroundImageError] = useState('')
    const { updateUser, error } = useUpdateProfile()

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser(backgroundImage)
    }

    const handleFileChange = (e) => {
        setBackgroundImage(null)
        let selected = e.target.files[0]
        console.log(selected)

        if (!selected) {
            setBackgroundImageError('Please select a file!')
            return
        }

        if (!selected.type.includes('image')) {
            setBackgroundImageError('File type must be an image')
            return
        }
        
        if (selected.size > 100000) {
            setBackgroundImageError('Image file must be less than 100kb')
        }

        setBackgroundImageError(null)
        setBackgroundImage(selected)
        console.log("background updated")
    }

    return (
        <>
            <div className="profile-header">
                <div className="profile-header-background">
                    {/* Profile background is null by default and should be a black imageif so */}
                    {currentUser && currentUser.backgroundImage && 
                        <img
                            src={currentUser.backgroundImage}
                            alt={`${user.displayName}'s background`}
                        />
                    }
                </div>
                <div className="profile-header-content">
                    <img
                        src={user.photoURL}
                        alt={`${user.displayName}'s thumbnail`}
                    />
                    <div>
                        <span>{user.displayName}</span>
                    </div>
                    <button
                        className="btn"
                        onClick={() => setDisplayHeaderForm(true)}
                    >Change Profile Background</button>
                </div>

                {/* <img
                    className="profile-img"
                    src={user.photoURL}
                    alt={`${user.displayName}'s thumbnail`}
                />
                <div className="profile-info">
                    <h2>{user.displayName}</h2>
                </div> */}

            </div>
            {displayHeaderForm && (
                <form className="profile-header-form" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <span>Upload new background image: </span>
                            <input
                                type="file"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                    <div className="profile-header-form-buttons">
                        <button className="btn">Update</button>
                        <div className="btn" onClick={() => setDisplayHeaderForm(false)}>Cancel</div>
                    </div>
                    {backgroundImageError && <p>{backgroundImageError}</p>}
                </form>
            )}
        </>
    )
}
