import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header>
        <Nav />
      </Header> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;