import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import { useUpdateProfile } from '../../hooks/useUpdateProfile'

// styles
import './ViewProfile.css'

export default function ViewProfile() {
    const { user: currentUser } = useAuthContext()
    const { document: user } = useDocument('users', currentUser.uid)
    const { id } = useParams()
    const { document: foundUser } = useDocument('users', id)
    const [showFollowing, setShowFollowing] = useState(false)
    const [showFollowers, setShowFollowers] = useState(false)
    const { updateFollowing, error } = useUpdateProfile()

    const handleFollow = () => {
        console.log(user.following)

        const userFollowing = {
            id: foundUser.id,
            displayName: foundUser.displayName,
            photoURL: foundUser.photoURL
        }

        const currentUserDetails = {
            id: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
        }

        updateFollowing(userFollowing, currentUserDetails)
    }

    const handleFollowersClick = () => {
        setShowFollowers(true)
    }

    const handleFollowingClick = () => {
        setShowFollowing(true)
    }

    return (
        <div className="view-profile-container">
            {foundUser && (
                <>
                    <img src={foundUser.photoURL} alt="" />
                    <span>{foundUser.displayName}</span>
                    <p onClick={handleFollow}>follow</p>
                    <p onClick={handleFollowersClick}>Followers {foundUser.followers.length}</p>
                    <p onClick={handleFollowingClick}>Following {foundUser.following.length}</p>
                </>
            )}

            {showFollowers && (
                <div className="show-following-container">
                    <div>
                        <span onClick={() => console.log(foundUser.followers)}>Followers</span>
                        <div onClick={() => setShowFollowers(false)}>x</div>
                    </div>
                    {foundUser && foundUser.followers.map(e => (
                        <div className="following-followers-card" key={e.id}>
                            <img src={e.photoURL} alt="" />
                            <span>{e.displayName}</span>
                        </div>
                    ))}
                </div>
            )}

            {showFollowing && (
                <div className="show-following-container">
                    <div>
                        <span>Following</span>
                        <div onClick={() => setShowFollowing(false)}>x</div>
                    </div>
                    {foundUser && foundUser.following.map(e => (
                        <div className="following-followers-card" key={e.id}>
                            <img src={e.photoURL} alt="" />
                            <span>{e.displayName}</span>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
