import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LandingPage from './componentes/Pages';
//import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
