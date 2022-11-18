import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={}/>
      </Routes>
    </div>
  );
}

export default App;
