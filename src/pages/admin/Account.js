import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import { ChangePassword } from "./ChangePassword";
import { MyAccount } from "./MyAccount";

export const Account = () => {

    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState({});

    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const token = localStorage.getItem('library-login');
            if (token === null) {
                navigate('/admin');
            } else {
                const response = await getAdminData();
                if (response.status === 200) {
                    setLoading(false);
                    setAdmin(response.data);

                } else {
                    navigate('/login');
                }
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
                to={'/admin-homepage/account/my-account'}>
                My Account</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/account/change-password'}>
                Change Password</NavLink>
        </div>

        <Routes>
            <Route path="/my-account" element={<MyAccount/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
        </Routes>
        

    </>)
}