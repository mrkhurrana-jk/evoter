import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Userpage from './components/Userpage/Userpage';
import Register from './components/Register/Register';
import Voterpage from './components/Voterpage';
import Control from './components/Adminhome/Control'


function App() {
  return (
    <div >

      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/controlcenter" element={<Control />} />
          <Route path="/voter" element={<Voterpage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
