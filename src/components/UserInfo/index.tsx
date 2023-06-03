import React from "react"
import styles from './styles.module.scss'

type UserAvatarProps = {
    avatar: string,
    name: string,
    role: string
}

export default function UserInfo({avatar, name, role}: UserAvatarProps) {
    return (
    <div className={styles.container}>
        <img src={avatar} />
        <div className={styles.userInfo}>
            <p className={styles.userName}>{name}</p>
            <p className={styles.userRole}>{role}</p>
        </div>
    </div>)
}