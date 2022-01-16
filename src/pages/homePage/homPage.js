import React from 'react';
import Directory from '../../components/directory/directory';
import './styles.scss';

const HomePage = () => {
  return (
    <div className='hompage'>
      <div className='directory-menu'>
       <Directory />
      </div>
    </div>
  )
}

export default HomePage
