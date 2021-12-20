

export default function ProfileHeader({ user }) {

    return (
        <div className="profile-header">
            <div className="profile-header-background">
                <img
                    src="https://www.teahub.io/photos/full/320-3202203_landscape-background-sky.jpg"
                    alt={`${user.displayName}'s background`}
                />
            </div>
            <div className="profile-header-content">
                <img
                    src={user.photoURL}
                    alt={`${user.displayName}'s thumbnail`}
                />
                <div>
                    <span>{user.displayName}</span>
                </div>
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
    )
}
