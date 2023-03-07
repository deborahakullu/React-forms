import React from 'react';
import { useState } from 'react';

function Form3() {
  const [myHouse, setMyHouse] = useState("");

  const handleChange = (event) => {
    setMyHouse(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${myHouse}`);
  }

  return (
    <div className='container3'>
      <h1> Select drop down Form</h1>
      <form onSubmit={handleSubmit}className="form">
        <h2>Pick a house of your choice</h2>
        <select value={myHouse} onChange={handleChange}className="input">
          <option value="Bungalow">Bungalow</option>
          <option value="Tent">Tent</option>
          <option value="Flat">Flat</option>
          <option value="Hut">Hut</option>
        </select>
        <button type="submit" className='sub' >Submit </button >
      </form>
    </div>

  )
}


export { Form3 }