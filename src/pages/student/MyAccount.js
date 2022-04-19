import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getStudentData } from "../../services/api";

export const MyAccount = () => {

    const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState({});

    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const token = localStorage.getItem('library-login');
            if (token === null) {
                navigate('/student'); 
            } else {
                const response = await getStudentData();
                if (response.status === 200) {
                    setLoading(false);
                    setStudent(response.data);
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
                <p>FirstName:{student.firstName}</p>
                <p>LastName:{student.lastName}</p>
                <p>Email:{student.email}</p>
                <p>Mobile:{student.mobile}</p>
                <p>Type:{student.type}</p>
            </div>

    </>)
}