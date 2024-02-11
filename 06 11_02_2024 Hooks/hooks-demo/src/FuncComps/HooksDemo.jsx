import { useState, useEffect } from 'react';

export default function HooksDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [values, setValues] = useState({ num1: 1, num2: 2 });

  const btnCounterPlus = () => {
    // debugger;
    // let newC = count + 1;
    // setCount(newC);
    setCount(prevC => prevC + 1);
    //setCount(prevC => prevC + 1);
    setValues({...values,  num1: 7 });
  }

  useEffect(() => {
    console.log('effect ');
  })

  useEffect(() => {
    console.log('count = ', count);
  }, [count])

  useEffect(() => {
    console.log('count2 = ', count2);
  }, [count2])

  useEffect(() => {
    console.log('did mount');

    return () => {
      console.log('unmount');
    }
  }, [])

  console.log('return');
  return (
    <div>HooksDemo <br />
      <button onClick={btnCounterPlus}>Counter ++</button> <br />
      undefined? {count === undefined ? 'null' : 'not null'} <br />
      count= {count} <br />
      num1 = {values.num1} <br />
      num2= {values.num2}
    </div>
  )
}
