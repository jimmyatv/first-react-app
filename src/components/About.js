import React from 'react';
import './About.css';

const About = ({imageSrc, title, mainTitle, description, button}) => {


  return (
    <div className='about'>
        <img className='about--img' src={imageSrc} alt='About us'></img>
        <div className='about--text'>
            <p className='about--title'>{title}</p>
            <h1 className='about--mainTitle'>{mainTitle}</h1>
            <p className='about--description'>{description}</p>
            <a className='about--button'>{button}</a>
        </div>
    </div>
  )
}

export default About;