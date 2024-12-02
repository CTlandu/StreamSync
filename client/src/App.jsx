import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SubscribePage from './pages/SubscribePage';
import FollowingPage from './pages/FollowingPage';
import SubscribePage_test from './pages/SubscribePage_test';
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/subscribe-test" element={<SubscribePage_test />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
