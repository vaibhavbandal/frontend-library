import { Routes, Route } from "react-router-dom";

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import Navbar from "./components/Navbar";
import AdminHomepage from "./pages/admin/AdminHomepage";
import LibrarianHomepage from "./pages/librarian/LibrarianHomepage";
import StudentHomepage from "./pages/student/StudentHomepage";
import { LoginLibrarian } from "./pages/admin/LoginLibrarian";
import { LoginStudent } from "./pages/admin/LoginStudent";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Login loginUser={'ADMIN'} email="guestadmin@gmail.com" password='guestadmin' />} />
        <Route path="/librarian" element={<LoginLibrarian loginUser={'LIBRARIAN'} email="guestlibrarian@gmail.com" password='guestlibrarian' />} />
        <Route path="/student" element={<LoginStudent loginUser={'STUDENT'} email="gueststudent@gmail.com" password='gueststudent' />} />
        <Route path="/admin-homepage/*" element={<AdminHomepage />} />
        <Route path="/librarian-homepage/*" element={<LibrarianHomepage />} />
        <Route path="/student-homepage/*" element={<StudentHomepage />} />
      </Routes>
    </>
  );
}

export default App;
