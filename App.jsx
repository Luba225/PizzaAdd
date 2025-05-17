import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import Navbar from './components/Navbar';
import './styles/global.scss';

 function App() {
   return (
     <div className="app">
       <Router>
        <Navbar />
         <Routes>
           <Route path="/" element={<Menu />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/order" element={<OrderForm />} />
         </Routes>
       </Router>
     </div>
   );
 }

 export default App;