import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Dashboard from './Component/Dashboard/Dashboard';
import Dummy from './Component/Dummy/Dummy';


// import "./App.scss";


function App() {
  return (
    <div className=''>
      {/* <SmoothScroll/> */}
      <div className="dark:bg-[#1F1F1F] bg-white">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="/dummy" element={<Dummy />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div >
    </div>
  );
}

export default App;
