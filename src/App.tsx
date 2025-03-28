import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Pruebas from './pages/Pruebas';
import UsersList from './components/users/UsersList';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Usuarios</Link> | <Link to="/pruebas">Pruebas</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
