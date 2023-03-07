import React from "react";
import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <div>
      <div className="container">
        <h1>Form with onchange event</h1>
        <form onSubmit={handleSubmit} className='form1'>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </label>
          <br></br>
          <label>
            Enter your email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </label>
          <br></br>
          <label>
            Enter your password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </label>
          <br></br>
          <input type="Submit" className="sub" />
        </form>
      </div>
    </div>
  );
}

export { Form1 };
