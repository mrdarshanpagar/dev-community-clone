import './App.scss';
import Navigation from './components.js/Navigation';
import LeftSidebar from './components.js/LeftSidebar';
import Content from './components.js/Content';
import RightSidebar from './components.js/RightSidebar';


function App() {
  return (
    <>
      <Navigation/>

      <main className="main-container">
        <LeftSidebar/>
        <Content/>
        <RightSidebar/>
      </main>
    </>
  );
}

export default App;
