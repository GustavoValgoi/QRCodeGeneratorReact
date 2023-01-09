import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// Pages
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Container fluid className="bg-dark py-5">
      <Container>
        <Routes>
          <Route path='/' element={<Navigate to='/qr-code' />} />
          <Route path='/qr-code' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Container>
  )
}

export default App