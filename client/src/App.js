import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import PointsTable from './Pages/PointsTable';
import MatchDetails from './Pages/MatchDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/:id" element={<MatchDetails />} />
        <Route path="/points" element={<PointsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
