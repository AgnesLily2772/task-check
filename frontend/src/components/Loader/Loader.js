import React from 'react';
import './Loader.css'
import load from './loader.gif'
const Load = () => {
  return (
  <div className='load'><img src={load} alt='loading'/>
  </div>
  );
};

export default Load;
