import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.scss'
import DefaultLayout from './defaultLayout/DefaultLayout'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
