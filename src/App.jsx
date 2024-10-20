import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'

function App() {
  

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
