import React from 'react';
import { useState } from 'react';

function Form2() {
  const [message, setMessage] = useState("Please input any message of your choice");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`message: ${message}`);
  };

  return (
    <div className='container1'>
      <h1>Form with textarea</h1>
      <form onSubmit={handleSubmit}>
        <label>Message
        </label><br></br>
        <textarea className='input' value={message} placeholder='Message please' onchange={(e) => setMessage(e.target.value)} cols="40" rows="4" /> <br></br>
        <button type="submit" className='sub' >Submit </button >
      </form>
    </div>

  )
}


export { Form2 }