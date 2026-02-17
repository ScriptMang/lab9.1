import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail,showRole, onEdit,children}: UserProfileCardProps) {
 onEdit ? onEdit("Hello") : console.log("no funct");
    return (
        <>
         <h1>Title</h1>
         <p>{user.id}</p>
         <p>{user.name}</p>
         {showEmail ? <p>{user.email}</p> :  showEmail}
         {showRole ? <p>{user.role}</p> :  showRole}
         <img src={user.avatarUrl}/>
        {children}
        </>
    )
}

export default UserProfileCard; 