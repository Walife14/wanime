

import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './FriendsChat.module.css'

export default function FriendsChat() {
    const [showFriendsChat, setShowFriendsChat] = useState(false)

    return (
        <>
            {!showFriendsChat && 
                <div onClick={() => setShowFriendsChat(true)} className={styles.container}>
                </div>
            }
            {showFriendsChat && 
                <div className={styles['container-show']}>
                    <div className={styles['container-show-header']}>
                        <span>Friends Chat</span>
                        <div onClick={() => setShowFriendsChat(false)}>X</div>
                    </div>
                    <Link to="/search">
                        Search For Friends
                    </Link>
                </div>
            }
        </>
    )
}