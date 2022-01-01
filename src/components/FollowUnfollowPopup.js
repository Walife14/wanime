import React from 'react'

// styles
import styles from './FollowUnfollowPopup.module.css'

function FollowUnfollowPopup(props) {
    return (props.trigger) ? (
        <div className={styles['fu-popup']}>
            <div className={styles['fu-popup-inner']}>
                <button
                    className={styles['close-btn']}
                    onClick={() => props.setPopupTrigger(false)}
                >close</button>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default FollowUnfollowPopup