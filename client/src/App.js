import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-Layout';
import { AdminUser } from './components/layouts/Admin-users';
import { AdminUpdate } from './components/layouts/Admin-Update';
import { ProfileDetails } from './components/profiles/Profile-details';
import { ProfileLayout } from './components/profiles/Profile-Layout';
import { ProfileUpdate } from './components/profiles/Profile-Update';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/profile/profileDetails" element={<ProfileDetails />} />
        <Route
          path="/profile/profileDetails/:id/edit"
          element={<ProfileUpdate />}
        />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUser />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
