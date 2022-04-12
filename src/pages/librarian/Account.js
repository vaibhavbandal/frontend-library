import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";

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
                to={'/librarian-homepage/account/my-account'}>
                My Account</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/librarian-homepage/account/change-password'}>
                Change Password</NavLink>
        </div>


        <Routes>
            <Route path="/my-account" element={<h3>MyAccount</h3>} />
            <Route path="/change-password" element={<h3>Change Password</h3>} />
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