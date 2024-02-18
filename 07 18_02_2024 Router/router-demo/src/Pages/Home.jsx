import { useNavigate } from "react-router-dom"


export default function Home() {

  const navigate = useNavigate();

  const btnGo2UserWD = () => {
    
    let userObj = {
      id: 7,
      name: 'avi'
    };

    navigate('user', { state: userObj });
  }

  return (
    <div>Home <br />
      <button onClick={() => navigate('/about')}>go2About</button> <br />
      <button onClick={btnGo2UserWD}>go2UserWithData</button>
    </div>
  )
}
