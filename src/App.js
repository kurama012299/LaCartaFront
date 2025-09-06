import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/RestaurantManager/Restaurants/Restaurants';
import ViewRestaurants from './pages/RestaurantManager/RestaurantsView/ViewRestaurants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/viewrestaurants" element={<ViewRestaurants/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
