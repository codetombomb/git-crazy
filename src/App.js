import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
