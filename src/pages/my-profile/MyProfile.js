import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'

// components
import ProfileHeader from './ProfileHeader'
import ProfileLikedWatchlist from './ProfileLikedWatchlist'

// styles
import './MyProfile.css'

export default function MyProfile() {
    const { user } = useAuthContext()
    const { document: currentUser } = useDocument('users', user.uid)

    if(currentUser) console.log(currentUser)
    
    return (
        <div className="profile-container">
            <ProfileHeader user={user} />
            <ProfileLikedWatchlist currentUser={currentUser} />
        </div>
    )
}
