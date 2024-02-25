import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";


export default function HobbyData(props) {
  const { removeHobby } = useContext(HobbyContext);

  return (
    <div >
      id={props.hob.id}
      name={props.hob.name}
      times={props.hob.times}
      <span
        style={{ color: 'red' }}
        onClick={() => removeHobby(props.hob.id)}
      > X </span>
    </div>
  )
}
