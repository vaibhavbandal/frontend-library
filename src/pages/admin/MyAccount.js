import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";

export const MyAccount = () => {

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

       <h3>My Account</h3>
            <div>
                <p>FirstName:{admin.firstName}</p>
                <p>LastName:{admin.lastName}</p>
                <p>Email:{admin.email}</p>
                <p>Mobile:{admin.mobile}</p>
                <p>Type:{admin.type}</p>
            </div>

    </>)
}