import './App.css';
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import Footer from './componets/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './componets/About';
import Contact from './componets/Contact';
import Login from './componets/Login';
import Signup from './componets/Signup';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />}/>
          <Route exact  path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="loginteacher" element={<Login mode='Teacher' />} />
          <Route exact path="loginstudent" element={<Login mode='Student' />} />
          <Route exact path="signupteacher" element={<Signup mode='Teacher' />} />
          <Route exact path="signupstudent" element={<Signup mode ='Student'/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}
export default App;