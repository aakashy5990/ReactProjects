import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div>Login Plz</div> 
  return <div> Welcome to the Aakash Yadav</div>
}

export default Profile