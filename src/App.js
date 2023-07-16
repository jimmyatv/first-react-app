import './App.css';
import Hero from './components/Hero';
import travel1 from './assets/travel1.jpg';
import travel2 from './assets/travel2.jpg';
import travel3 from './assets/travel3.jpg';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

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
    </div>
  );
}

export default App;
