import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import StudentDetails from './StudentDetails';
import { StudentRegister } from "./StudentRegister";

export const Student = () => {

    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState({});

    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            
            
        }


        fetchData();

    }, [])

    if (loading) {
        return (<>loading...</>)
    }


    return (<>


        <div className="border-bottom d-flex " >
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/librarian-homepage/student/student-list'}>
                Student List</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/librarian-homepage/student/register-student'}>
                Register Student</NavLink>
        </div>


        <Routes>
            <Route path="/student-list" element={<StudentDetails/>} /> 
            <Route path="/register-student" element={ <StudentRegister/> } />
        </Routes>
        



    </>)
}