import type { UserProfileCardProps } from '../../types'

function UserProfileCard({user, showEmail,showRole, onEdit,children}: UserProfileCardProps) {
    return (
        <div id="profileCard">
         <div id= "profileContainer">
            <img id="userImg" src={user.avatarUrl}/>
            <div id="profileInfo">
                <div>{user.name}</div>
                {showEmail ? <p>{user.email}</p> :  showEmail}
                {showRole ? <p>{user.role}</p> :  showRole}
            </div>
         </div>
         
         <button onClick={() => onEdit ? onEdit(user.id) : null} 
          style={{backgroundColor: "blue", color: "white"}} id="editProfileButton">Edit Profile</button>
        {children}
        </div>
    )
}

export default UserProfileCard; 