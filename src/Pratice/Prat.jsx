/*


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import PageNotFound  from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>} />
         <Route path="product" element={<Product />} />
         <Route path="pricing" element={<Pricing />} /> 
         <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App




HOMEPAGE 


import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"


function Homepage() {
    return (
    <div>
          <PageNav />
    <h1>WorldWise</h1>

    <Link to="/pricing">Pricing</Link>
    </div>
    
     
    )
}

export default Homepage





import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>

                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default PageNav


*/