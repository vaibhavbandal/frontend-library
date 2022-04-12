import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";

export const Home = () => {

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
                to={'/admin-homepage/home/home1'}>
                Home1</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/home/home2'}>
                Home2</NavLink>
        </div>


        <Routes>
            <Route path="/home1" element={<h3>Home1</h3>} />
            <Route path="/home2" element={<h3>Home2</h3>} />
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