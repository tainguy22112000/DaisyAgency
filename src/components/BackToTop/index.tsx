import React, { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function BackToTop() {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 400){
          setVisible(false)
        }
      };

      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
  return (
    <button className={styles.backToTop} style={{display: visible ? 'inline' : 'none'}} >
        <FaChevronUp onClick={scrollToTop} 
        />
   </button>
  )
}
