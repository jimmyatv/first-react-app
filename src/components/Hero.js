import React from 'react';
import './Hero.css'

const Hero = ({imageSrc, mainTitle}) => {
    

  return (
    <div className='hero'>
        <img className='hero--img' src={imageSrc} alt='Travel' />
        <h1 className='hero--title'>{mainTitle}</h1>
    </div>
  )
}

export default Hero;