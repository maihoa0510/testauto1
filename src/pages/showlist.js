import {getUser} from '../../lib/user'

export default function About( {users}) {
  return (<>
    <div className="container">
    <table className="table">
    
      <tr>
         <th>id</th>
        <th>Email</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Business</th>
      </tr>
    
   {
    users.map(user => (
      <tr>
      <td key = {user.id}></td>
      <td>{user.email}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.business}</td>
    </tr>
    ))
   }
     </table>
    </div>
  </>)
}
export async function getServerSideProps(context) {
  const users = await getUser()
  return {
    props: {users}, 
  }
}