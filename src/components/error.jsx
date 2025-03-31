import React from 'react'

const Error = ({message}) => {
  return (
    <div className='error'>
      <p>Uçuş verisi alınamadı</p>
      <p>{message} </p>
    </div>
  );
};

export default Error
