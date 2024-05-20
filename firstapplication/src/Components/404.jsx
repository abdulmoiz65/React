import React from 'react';
import { useNavigate } from 'react-router-dom';



const Error = () => {


  const navigate = useNavigate();
  
  const shift = () => {
    navigate("/");
  }
  
  
  return (
    <>
    <h1>404 page not found ! </h1>
    <button onClick={shift} > CLICK ME </button>
    </>
  );
};

export default Error;