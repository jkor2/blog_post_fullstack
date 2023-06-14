
import React from "react"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "./Components/home"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
