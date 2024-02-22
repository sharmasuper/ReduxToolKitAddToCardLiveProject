
import './App.css'
import CardPage from './ComponetFile/CardPage';
import Navbar from './ComponetFile/Navbar'
import ProductCard from './ComponetFile/ProductCard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 

  return (
    <>
    <div>
      
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={ <ProductCard/>}></Route>
      <Route exact path='/card' element={ <CardPage/>}></Route> 
      </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
