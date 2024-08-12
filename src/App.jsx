import {Navbar,News,General,Paper} from './components'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

const topics = [
  "web development",
  "artificial intelligence",
  "software development",
  "cybersecurity",
  "application development",
  "blockchain",
  "quantum computing"
];

function App() {
 return (
   <section>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<News/>}/>
      <Route path="/general" element={<General/>}/>
      <Route path="/paper" element={<Paper/>}/>
    </Routes>
    </BrowserRouter>
   </section>
  
  )
}

export default App
