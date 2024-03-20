import React from 'react'
import styles from '../components/Dogs.module.css'
import Dogs from '../img/svg/dogs.svg'

const Footer = () => {
  return (
    <div className={styles.container_footer}>
      <img className={styles.dogs_footer}src={Dogs} alt='Dogs Footer'/>
      <div>Dogs.Alguns direitos reservados</div>
    </div>
  )
}

export default Footer;