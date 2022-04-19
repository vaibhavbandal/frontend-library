import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import Home1 from "./Home1";
import { IssueReturnBook } from "./IssueReturnBook";
import { IssueReturnHistory } from "./IssueReturnHistory";


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
                to={'/librarian-homepage/home/home1'}>
                Home1</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/librarian-homepage/home/home2'}>
                Issue and Return</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/librarian-homepage/home/issue-return-history'}>
                History IR</NavLink>
        </div>


        <Routes>
            <Route path="/home1" element={<Home1/>} />
            <Route path="/home2" element={<IssueReturnBook/>} />
            <Route path="/issue-return-history" element={ <IssueReturnHistory/> } />
        </Routes>
        

    </>)
}