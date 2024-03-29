import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div>
      <Header className ='headerNav'>
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