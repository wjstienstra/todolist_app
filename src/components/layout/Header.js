import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>
    </header>
  )
}

//Brad likes to have everything related to the component in a single file, that's why he includes style here rather then having a central css file, but that is another possibility
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const LinkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
