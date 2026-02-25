import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import type {User, Product} from './types/index.ts'

function App() {

   const tempUser:User = {
        id:"1",
        name: "Bob",
        email: "bobby@gmail.com",
        role: "admin",
        avatarUrl: "https://upload.wikimedia.org/wiktionary/en/a/a5/Shocked_Pikachu.png"
    };

    const tempProduct: Product = {
        id: "2",
        name: "wireless bluetooth headphones",
        price: 55.00,
        description: "Great headphones",
        imageUrl: "https://i5.walmartimages.com/asr/623db424-06f8-4a6f-a715-f3812ee51eb5.321c1bcac78d110eaf287c1474255411.jpeg", 
        inStock: true
      }

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
      <hr />
      <ProductDisplay product={tempProduct}>
        please buy
      </ProductDisplay>
    </>
  )
}

export default App