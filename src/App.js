import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Home from './components/Home'
import './style.css'
export default function App() {
  return (
    <>
      <h1>Main Page</h1>
      <BrowserRouter>
       <Link to='/Home' className='a'>Home</Link>
      <Link to='/about' className='a'>about</Link>
      <Link to='/services' className='a'>services</Link>
      <Link to='/contact' className='a'>contact</Link> 
         <Routes>
         <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

