import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail,showRole, onEdit,children}: UserProfileCardProps) {
    return (
        <>
         <p>{user.name}</p>
         {showEmail ? <p>{user.email}</p> :  showEmail}
         {showRole ? <p>{user.role}</p> :  showRole}
         <img src={user.avatarUrl}/>
         <button onClick={() => onEdit ? onEdit(user.id) : null} 
          style={{backgroundColor: "blue", color: "white"}}>Edit Profile</button>
        {children}
        </>
    )
}

export default UserProfileCard; 