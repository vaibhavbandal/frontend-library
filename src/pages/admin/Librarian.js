import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import LibrarianDetails from "./LibrarianDetails";
import LibrarianRegister from "./LibrarianRegister";

export const Librarian = () => {

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
                to={'/admin-homepage/librarian/librarian-list'}>
                Librarian List</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/librarian/register-librarian'}>
                Register Librarian</NavLink>
        </div>


        <Routes>
            <Route path="/librarian-list" element={<LibrarianDetails/>} />
            <Route path="/register-librarian" element={<LibrarianRegister/>} />
        </Routes>
        


    </>)
}