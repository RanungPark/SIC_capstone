import React from 'react';

export default function ImageView({image}) {
  return (
    <>
    {
      image && <img src={image} alt='이미지' className='render-image'>
      </img>
    }
    </>
  );
}

