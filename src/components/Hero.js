import {React, useState} from 'react';
import './Hero.css'

const Hero = ({ imageSrc, mainTitle, setNavBarLinks }) => {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const pageAdded = (e) => {
    e.preventDefault();

    if (url !== '' && title !== '') {
      setNavBarLinks(prev => [...prev, {
        url: url,
        title: title
      }])
    }

    setUrl('');
    setTitle('');

    e.target.focused.focus();
  }


  return (
    <div className='hero'>
      <img className='hero--img' src={imageSrc} alt='Travel' />
      <form onSubmit={pageAdded}>
        <input onChange={(e) => { setUrl(e.target.value) }} name='focused' value={url} type='text' placeholder='Url' />
        <input onChange={(e) => { setTitle(e.target.value) }} value={title} type='text' placeholder='Title' />
        <input type='submit' value='Add new page' />
      </form>
      <h1 className='hero--title'>{mainTitle}</h1>
    </div>
  )
}

export default Hero;