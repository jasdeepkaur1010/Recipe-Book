// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='top-nav'>
          <Link to="/">Home </Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Router>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a */}
          {/* className="App-link" */}
          {/* href="https://reactjs.org" */}
          {/* target="_blank" */}
          {/* rel="noopener noreferrer" */}
        {/* > */}
          {/* Learn React */}
        {/* </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
