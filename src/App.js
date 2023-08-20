import './App.css';
import Hero from './components/Hero';
import travel1 from './assets/travel1.jpg';
import travel2 from './assets/travel2.jpg';
import travel3 from './assets/travel3.jpg';
import travel4 from './assets/travel4.png';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import About from './components/About';

const navBarLinks = [
  { url: '#', title: 'Home' }, 
  { url: '#', title: 'Trips' },
  { url: '#', title: 'Contact' }, 
  { url: '#', title: 'About' }];

const App = () => {
  return (
    <div className="App">
      <Navbar navBarLinks={navBarLinks}/>
      <Hero imageSrc={travel1} mainTitle={'Travel made simple'} />
      <Slider imageSrc={travel2} title={'Make your dreams come true '} subtitle={'We are the team'} />
      <Slider imageSrc={travel3} title={'Take a look at our heaven , maybe you will travel with us'} subtitle={'Unexpected jurney is just a few clicks away from you'} flipped={true} />
      <About imageSrc={travel4} title={'About us'} mainTitle={'Explore world with us'} description={'You can enjoy with our legacy, so If we can help you we will do everything in our power to make yourself comfortable. That is our job'} button={'Get started'}/>
    </div>
  );
}

export default App;
