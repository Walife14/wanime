import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// components
import ProfileHeader from './ProfileHeader'
import ProfileLikedWatchlist from './ProfileLikedWatchlist'
import ProfileTheories from './ProfileTheories'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()
    const { document: currentUser } = useDocument('users', user.uid)

    return (
        <div className="profile-container">
            <ProfileHeader user={user} currentUser={currentUser} />
            <ProfileLikedWatchlist currentUser={currentUser} />
            <ProfileTheories currentUser={currentUser} />
        </div>
    )
}