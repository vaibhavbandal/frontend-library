import { Routes, Route } from "react-router-dom";

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import Navbar from "./components/Navbar";
import AdminHomepage from "./pages/admin/AdminHomepage";
import LibrarianHomepage from "./pages/librarian/LibrarianHomepage";
import StudentHomepage from "./pages/student/StudentHomepage";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Login loginUser={'ADMIN'} />} />
        <Route path="/librarian" element={<Login loginUser={'LIBRARIAN'} />} />
        <Route path="/student" element={<Login loginUser={'STUDENT'} />} />
        <Route path="/admin-homepage/*" element={<AdminHomepage />} />
        <Route path="/librarian-homepage/*" element={<LibrarianHomepage />} />
        <Route path="/student-homepage/*" element={<StudentHomepage />} />
      </Routes>
    </>
  );
}

export default App;
