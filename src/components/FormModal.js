import React from 'react'

// styles
import styles from './FormModal.module.css'

function FormModal(props) {
    return (props.trigger) ? (
        <div className={styles['fu-popup']}>
            <div className={styles['fu-popup-inner']}>
                <button
                    className={styles['close-btn']}
                    onClick={() => props.setFormModalTrigger(false)}
                >close</button>
                { props.children }
            </div>
        </div>
    ) : ""
}

export default FormModal