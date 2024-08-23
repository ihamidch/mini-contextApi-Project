import { useContext } from "react"
import UserContext from "../Context/UserContext"
const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div> Please login to see the profile </div>
    return (
        <div>
            <h1>{user.username}</h1>
            <h2>{user.password}</h2>
        </div>
    )       
    
}

export default Profile