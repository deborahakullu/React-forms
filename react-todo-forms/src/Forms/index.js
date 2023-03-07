import React from 'react';
// import "./App.css";
import {Form1 }from './form1';
import {Form2} from './form2';
import {Form3} from './form3';
import "./index.css";


// function App(){
//     return(
//         <div className='App'>
//             <Form1/>
//             <Form2/>
//             <Form3/>  
//         </div>
//     );
// }

// export default App;
export function FormsDashboard() {
    return (
      <div>
        <Form1/>
  
        <Form2/>
  
         <Form3/>
      </div>
      

  )
  }