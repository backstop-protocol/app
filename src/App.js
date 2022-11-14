import './App.css';
import Home from './pages/Home'
import Terms from './pages/Terms'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/terms"  element={<Terms/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
