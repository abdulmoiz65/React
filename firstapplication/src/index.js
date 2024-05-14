import React from 'react';
import ReactDOM from 'react-dom';

import Headerr from './headerr';
import User from './user';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const div = {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  background: 'yellow',
  height: '100vh',
  width: '100%'
};

const a="Abdul Moiz";
const b="a Software developer";


ReactDOM.render(

<div style={div}>
  <h1 style={{color : 'red' , textAlign:'center'}}>abdul moiz</h1>
  
  {/* react components */}
 <>
 <User name="ABDUL MOIZ"   expertise = "frontend developer"/>
 <User name="john" expertise = "software"/>
 </>
 <>
  <Headerr/>
  </>

 
{/* TEMPLATE LITERALS  */}
 
  {/* Fragment first method */}
  <>
  <h1>My Name is {a} and i am {b}</h1>
  </>

  <>
  <h1>my name is {a + " " + b }</h1>
  </>

  <>
  <h1>{`my name is ${a} and i am ${b}`}</h1>
  </>

  </div>,


  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

