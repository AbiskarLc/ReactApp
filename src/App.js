
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components1/Home';
import Contact from './Components1/Contact';
import Service from './Components1/Service';
import Navbar from './Components1/Navbar';

import img1 from './Images/img1.png'
import img2 from './Images/img2.png'


function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/' element={<Home gesture={"Grow your Bussiness with"} text={"We are here to provide effective services to clients"}  btnTxt={"Get Started"} img={img1} path='/about'/>}/>
  <Route path='/about' element={<Home gesture={"Welcome to About Page of"} text={"Click on the Button below to experience our Services"} btnTxt={"Services"} img={img2} path='/service'/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='*' element={<Home/>}/>
</Routes>
      
    </>

  );
}

export default App;
