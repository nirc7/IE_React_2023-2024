import React from 'react'

export default function FCSL(props) {

  let studentListStr = props.students.map(
    stu => <div key={stu.id} >{stu.id}--{stu.name}--{stu.grade}</div>);

  return (
    <div>
      {studentListStr}
    </div>
  )
}
