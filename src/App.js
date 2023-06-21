import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' />
          <Route path='/missions' />
          <Route path='/contatcs' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
