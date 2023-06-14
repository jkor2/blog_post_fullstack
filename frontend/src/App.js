
import React from "react"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "./Components/home"
import Login from "./Components/login"
import Signup from "./Components/signup";
import "./styles.css";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
