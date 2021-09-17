import React from 'react'
import styles from './systembar.module.css'

function SystemBar() {
    return (
        <nav className={styles.systemBar}>        
            <div className={styles.logo}>
                <img src="assets/jordan.png" height="22" alt="Load"/>
            </div>  
            
            <ul className={styles.menu}>
                <li className={styles.item}>Help</li>
                <li className={styles.item}>Join us</li>
                <li className={styles.item}>Sign In</li>
            </ul>       
        </nav>
    )
}

export default SystemBar
