import React from 'react';

const links = ({ imageSrc, links }) => {
  return (
    <div style={{
      position: 'relative',
      height: '100px',
      overflow: 'hidden',
      color: '#ffffff',
      background: `url(${imageSrc}) center/cover no-repeat`,
      border: '5px solid #ffffff',
      zIndex: '2',
      top: '1000px',

    }}>

      {/* Text */}
      <div className = "zoom" style={{
        position: 'absolute',
        top: '50%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5em',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '80%',
        textAlign: 'left',
      }}>
      {links.map((linkOb, index) => (
        <span key={index}>

          <a href={linkOb.link}> {linkOb.title}</a>
        </span>
      ))}
      </div>

    </div>
  );
};

export default links;