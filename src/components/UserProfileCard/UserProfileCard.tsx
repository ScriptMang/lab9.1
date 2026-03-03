import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail,showRole, onEdit,children}: UserProfileCardProps) {
    return (
        <>
         <h1>Title</h1>
         <p>{user.id}</p>
         <p>{user.name}</p>
         {showEmail ? <p>{user.email}</p> :  showEmail}
         {showRole ? <p>{user.role}</p> :  showRole}
         <img src={user.avatarUrl}/>
         <button onClick={() => onEdit ? onEdit(user.id) : null} 
          style={{backgroundColor: "blue", color: "white"}}>edit</button>
        {children}
        </>
    )
}

export default UserProfileCard; 