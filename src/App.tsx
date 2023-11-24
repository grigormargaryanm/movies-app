import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import Home from './pages/Home'
import Movies from './pages/Movies'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
