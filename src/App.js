import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Events from './components/Events';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddEvent from './components/AddEvent';
import Update from './components/Update';
import Sponsors from './components/Sponsors';
import Register from './components/Register';
import Login from './components/Login';
import Venues from './components/Venues';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/add-event' element={<AddEvent/>} />
          <Route path='/update-event/:id' element={<Update/>} />
          <Route path='/sponsors' element={<Sponsors/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/venue" element={<Venues/>} />
        </Routes>
      </div>
    </Router>    

  );
}
 
export default App;
