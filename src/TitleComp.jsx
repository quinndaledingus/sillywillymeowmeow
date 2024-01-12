import React from 'react';

const links = ({ text, imageSrc}) => {
  return (
    <div style={{
      position: 'relative',
      height: '100px',
      width: '1500px',
      left:'300px',
      overflow: 'hidden',
      color: '#ffffff',
      background: `url(${imageSrc}) center/cover no-repeat`,
      border: '5px solid #000000',
      zIndex: '2',
      top: '-110px',

    }}>


      {/* Text */}
      <div className ="sillygoofy" style={{
        position: 'absolute',
        top: '50%',
        left: '115%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2em',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '200%',
        textAlign: 'left',

      }}>
      {text}
      </div>



    </div>
  );
};

export default links;