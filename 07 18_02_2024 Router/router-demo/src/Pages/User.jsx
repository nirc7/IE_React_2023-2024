import { useLocation, useNavigate } from "react-router-dom"


export default function User() {
  const navigate =  useNavigate();
  const { state } = useLocation();
  let userObj = state;

  return (
    <div> User <br />
      user id is {userObj.id} <br />
      user name is {userObj.name} <br />
      <button onClick={()=> navigate('/')} >go2Home</button>
    </div>
  )
}
