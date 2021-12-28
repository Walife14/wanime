import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'

// styles
import './ViewProfile.css'

export default function ViewProfile() {
    const { id } = useParams()
    const { document: user } = useDocument('users', id)

    console.log(user)

    return (
        <div className="view-profile-container">
            {user && (
                <>
                    <img src={user.photoURL} alt="" />
                    <span>{user.displayName}</span>
                    <p>Followers: <span>followers amount</span></p>
                    <p>Following: <span>following amount</span></p>
                </>
            )}

        </div>
    )
}
