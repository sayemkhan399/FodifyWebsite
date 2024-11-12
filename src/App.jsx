
import About from './About/About'
import './App.css'
import Cards from './Cards/Cards'
import Contact from './Contact/Contact'
import Discription from './Discription/Discription'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './Home/Home'
import Caption from './Listcaption/Caption'

function App() {


  return (
    <div className='bg-white text-black'>
      
      <div className='mx-24'>
      <Header></Header>
      <Home></Home>
      </div>
      <Caption></Caption>
      <Cards></Cards>
      <Discription></Discription>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default App
