import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="dark:bg-[#1F1F1F] bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>

        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div >
  );
}

export default App;
