import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";
import HobbyData from "./HobbyData";

export default function HobbiesList() {
  const { hobbies } = useContext(HobbyContext);

  let hobbiesStr = hobbies.map(hob =>
    <HobbyData key={hob.id} hob={hob} />);

  return (
    <div>
      {hobbiesStr}
    </div>
  )
}
