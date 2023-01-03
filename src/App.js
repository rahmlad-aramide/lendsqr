// import logo from './assets/lendsqr.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import {Login, Dashboard} from './pages'
// import { pathname } from 'react-router-dom';

function App() {
  // const pathname = window.location.pathname;
  // console.log(pathname)
  return (
    <div>
      {/* <header>
        {pathname === "/" ? (
          <></>
        ) : (
          <nav>
            <img src={logo} alt="Lendsqr" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        )}
      </header> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
