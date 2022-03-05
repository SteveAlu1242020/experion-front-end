import './App.css';
import './sass/style.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from './layouts/Sidebar';
import ProductsPage from './pages/ProductsPage';
import EmptyPage from './pages/EmptyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/emptyPage" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
