import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { LoadingProvider } from './hooks/LoadingContext';
import GlobalLoading from './components/GlobalLoading';
import RouteListener from './components/RouteListener';
import Home from './pages/Home';
import Restaurants from './pages/RestaurantManager/Restaurants/Restaurants';
import ViewRestaurants from './pages/RestaurantManager/RestaurantsView/ViewRestaurants';
import DiscoverView from './pages/SharesViews/DiscoverView/DiscoverView';
import Login from './pages/Login/Login';

function App() {
  return (
    <LoadingProvider>
    <BrowserRouter>
    <RouteListener/>
    <GlobalLoading/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/viewrestaurants" element={<ViewRestaurants/>}/>
        <Route path="/discoverview" element={<DiscoverView/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
