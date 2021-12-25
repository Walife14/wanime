

export default function ProfileHeader({ user, currentUser }) {

    return (
        <div className="profile-header">
            <div className="profile-header-background">
                {/* Profile background is null by default and should be a black imageif so */}
                {currentUser &&
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
