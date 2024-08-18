import {Navbar,News,General,Paper} from './components'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {ClipLoader} from 'react-spinners'
import { useEffect, useState} from 'react'
import './App.css'

function App() {
 const[loading,setLoading]=useState(true);
 
 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },3000)
 },[]);
 return (
   <section>
    { loading ? (
      <ClipLoader size={50} color={"#FF8A8A"} style={{display:"flex",justifyContent:"center"}}/>
    )
      :
     (
      <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<News/>}/>
       <Route path="/general" element={<General/>}/>
       <Route path="/paper" element={<Paper/>}/>
     </Routes>
     </BrowserRouter>)
}
   </section>
  
  )
}

export default App
