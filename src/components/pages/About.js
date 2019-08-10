import React from 'react'


//another way of exporting, rather then at the bottom: export default About;
//when you don't need a html element, react still requires you to wrap. This React.Fragment is a 'ghost' element for that purpose
export default function About() {
  return (
    <React.Fragment>
    <p>This is the Todolist app v1.0.0. Is is part of a React crash course</p>

    </React.Fragment>
  )
}
