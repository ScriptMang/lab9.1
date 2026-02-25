import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import type {User} from './types/index.ts'

function App() {

   const tempUser:User = {
        id:"1",
        name: "Bob",
        email: "bobby@gmail.com",
        role: "admin",
        avatarUrl: "https://upload.wikimedia.org/wiktionary/en/a/a5/Shocked_Pikachu.png"
    };

    const printUID = (uid: string) =>{
      console.log(uid);
    }
    printUID(tempUser.id);
  
    return (
    <>
      <AlertBox type='success' message='Hello World'>
        Testing
      </AlertBox>
      <AlertBox type='warning' message='Goodbye'>
          Testing123
      </AlertBox>

      <UserProfileCard user={tempUser} showEmail={true}>
        Card1
      </UserProfileCard>
    </>
  )
}

export default App