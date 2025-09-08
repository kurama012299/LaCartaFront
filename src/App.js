import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { LoadingProvider } from './hooks/LoadingContext';
import GlobalLoading from './components/GlobalLoading';
import RouteListener from './components/RouteListener';
import Home from './pages/Home';
import Restaurants from './pages/RestaurantManager/Restaurants/Restaurants';
import ViewRestaurants from './pages/RestaurantManager/RestaurantsView/ViewRestaurants';
import DiscoverView from './pages/SharesViews/DiscoverView/DiscoverView';

function App() {
  return (
    <LoadingProvider>
    <BrowserRouter>
    <RouteListener/>
    <GlobalLoading/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants/>}/>
        <Route path="/viewrestaurants" element={<ViewRestaurants/>}/>
        <Route path="/discoverview" element={<DiscoverView/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
