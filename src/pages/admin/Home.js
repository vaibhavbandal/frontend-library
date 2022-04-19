import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import Home1 from "./Home1";
import Home2 from "./Home2";

export const Home = () => {

    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState({});

    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            
            try {
                
            } catch (error) {
                
            }
            
        }


        fetchData();

    }, [])

    if (loading) {
        return (<>loading...</>)
    }


    return (<>


        <div className="border-bottom d-flex " >
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/home/home1'}>
                Home</NavLink>
            {/* <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/home/home2'}>
                Today's Import History</NavLink> */}
        </div>


        <Routes>
            <Route path="/home1" element={<Home1/>} />
            {/* <Route path="/home2" element={<Home2/>} /> */}
        </Routes>
        


    </>)
}