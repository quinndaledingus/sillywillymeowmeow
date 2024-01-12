import './App.css';
import React from 'react';

const Button = ({text,onClick}) => {
  return(
    <button className = "funkysilly" onClick={onClick} style={{
      color: '#000000',
      font: 'Pixel',
      padding: '27px 45px',
      fontSize: '1em',
      border: '5px solid #000000',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      top:'-110px',
      left: '-350px'
    }} onMouseOver={(e) => {
       e.currentTarget.style.transform = 'scale(1.05)';
    }} onMouseOut={(e) =>{
       e.currentTarget.style.transform = 'scale(1)';
    }}>
      {text}
    </button>
  );
};

export default Button;