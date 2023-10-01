
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='detail-page' element={<DetailPage/>}/>
      <Route path='header' element={<Header/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
