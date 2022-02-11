import React, { useState } from 'react';

import './App.css';
import Form from './components/form';
import ConnectedComponent from './components/connectedComponent';
function App() {
  const [first, setfirst] = useState(false)
  const handleClick = ()=> setfirst(!first);
  const handleShowAlert = ()=> alert('hello USA')
  const handleShowAlertWithParams = (name)=> alert('hello'+ name)
  return (
<div>
  <button onClick={handleClick}>switch on</button>
  <Form isActive={first} showAlert={handleShowAlert} handleShowAlertWithParams={handleShowAlertWithParams} />
  <ConnectedComponent />
</div>
  );
}

export default App;
