import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home.js";
import Edit from './components/Edit';
import Update from './components/Update';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=":url" element={<Edit />} />
        <Route path=":url/edit" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
