import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getLibrarianData } from "../../services/api";

export const MyAccount = () => {

    const [loading, setLoading] = useState(false);
    const [librarian, setLibrarian] = useState({});

    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const token = localStorage.getItem('library-login');
            if (token === null) {
                navigate('/admin');
            } else {
                const response = await getLibrarianData();
                if (response.status === 200) {
                    setLoading(false);
                    setLibrarian(response.data);

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
                <p>FirstName:{librarian.firstName}</p>
                <p>LastName:{librarian.lastName}</p>
                <p>Email:{librarian.email}</p>
                <p>Mobile:{librarian.mobile}</p>
                <p>Type:{librarian.type}</p>
            </div>

    </>)
}