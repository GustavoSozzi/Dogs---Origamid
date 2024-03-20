import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={`${styles.container} mainContainer`}>
      <h1 className='title'>Error 404</h1>
      <p>Pagina não encontrada</p>
    </div>
  )
}

export default NotFound