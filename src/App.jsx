import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import ErrorPage from './Components/ErrorPage'
import NavBar from './Components/NavBar'


function App() {

  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/contact' exact Component={Contact}/>
            <Route path='*' Component={ErrorPage}/> 
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
