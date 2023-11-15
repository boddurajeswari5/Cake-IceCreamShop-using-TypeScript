import {useEffect} from 'react'
import { fetchUsers } from './userSlice'
import { useAppSelector,useAppDispatch } from '../../app/hooks'


const UserView = () => {
  const user = useAppSelector((state)=>state.user)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>loading...</div>}
      {
        !user.loading && user.error ? <div>Error : {user.error}</div>:null
      }
      { !user.loading && user.users.length ?(
        user.users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))
      ):null}
    </div>
  )
}

export default UserView
