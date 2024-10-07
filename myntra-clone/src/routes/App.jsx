import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
function App () {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default App
