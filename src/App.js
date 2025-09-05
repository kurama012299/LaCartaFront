import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/RestaurantManager/Restaurants/Restaurants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
