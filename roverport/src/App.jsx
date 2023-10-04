
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SearchSitter } from './components/pages/SearchSitter';
import { BecomeSitter } from './components/pages/BecomeSitter';
import CatCarousel from './components/CatCarousel';
import { Navbar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/search" element={<SearchSitter/>} />
        <Route path="/becomeSitter" element={<BecomeSitter/>} />
      </Routes>

      <main>
        <CatCarousel />
      </main>
    </div>

  );
}

export default App;
