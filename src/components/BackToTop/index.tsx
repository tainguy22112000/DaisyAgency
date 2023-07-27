import React, { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import styles from './styles.module.scss'
import classNames from 'classnames';

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > SCROLL_THRESHOLD){
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
   <button className={classNames(styles.backToTop, !visible && styles.invisible)} >
      <FaChevronUp onClick={scrollToTop} />
    </button>
  )
}
