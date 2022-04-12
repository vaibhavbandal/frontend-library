import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";

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
                to={'/admin-homepage/student/student-list'}>
                Student List</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/student/register-student'}>
                Register Student</NavLink>
        </div>


        <Routes>
            <Route path="/student-list" element={<h3>Student List</h3>} />
            <Route path="/register-student" element={<h3>Register Student</h3>} />
        </Routes>
        

        {/* className="horizontal-menu-link me-2 p-1" */}

        {/* <div>
                <div>
                    First Name: {admin.firstName}
                </div>
                <div>
                    Last Name: {admin.lastName}
                </div>
                <div>
                    Email: {admin.email}
                </div>
                <div>
                    Mobile: {admin.mobile} 
                </div>
                <div>
                    User Type: {admin.type} 
                </div>
            </div> */}




    </>)
}