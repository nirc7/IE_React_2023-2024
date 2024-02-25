import { useState, createContext } from "react";
import { v4 as uuid } from 'uuid';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobbies, setHobbies] = useState([{ id: '1', name: 'Flight', times: 2, icon: 'Flight' }]);

  const addHobby = (name, times) => {
    let newItem = {
      id: uuid(),
      name,
      times,
      icon: ['Flight', 'Music', 'Another', 'Sport'][Math.floor(Math.random() * 4)]
    };
    setHobbies([...hobbies, newItem]);
  }

  const removeHobby = (id) => {
    setHobbies(hobbies.filter(hob => hob.id !== id));
  }

  return (
    <HobbyContext.Provider value={{ hobbies, addHobby, removeHobby }}>
      {props.children}
    </HobbyContext.Provider>
  )
}
