import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Offers from './Pages/Offers';
import OurStory from './Pages/OurStory';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Admindash from './Components/Dashboard/Admindash';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/blog' element={<Blog category="blog" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/admin' element={<Admindash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
