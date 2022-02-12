import './App.scss';
import Navigation from './components.js/Navigation';
import LeftSidebar from './components.js/LeftSidebar';
import Content from './components.js/Content';
import RightSidebar from './components.js/RightSidebar';
import {useState} from 'react';

function App() {

  const [mobileMenu, setmobileMenu] = useState(false)
  const toggle = ()=>{
    setmobileMenu(!mobileMenu)
  }

  return (
    <>
      <Navigation openMenu = {toggle}/>

      <main className="main-container">
        <LeftSidebar burgerMenu = {mobileMenu} closeMenu = {toggle}/>
        <Content/>
        <RightSidebar/>
      </main>
    </>
  );
}

export default App;
