import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/pocetna'
import Kontakt from './komponente/kontakt';
import Proizvodi from './komponente/Proizvodi';
import Footer from './komponente/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>


        <BrowserRouter>
        <Navbar></Navbar>
        <Proizvodi></Proizvodi>

        <Routes>
          <Route path='/' element={<Pocetna></Pocetna>}> </Route>
          <Route path='/kontakt' element= {<Kontakt></Kontakt>}> </Route>





        </Routes>


<Footer></Footer>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
