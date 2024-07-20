
import LocomotiveScroll from 'locomotive-scroll';

import './App.css'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='main'>
      <Page1  />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App
