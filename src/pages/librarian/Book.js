import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { getAdminData } from "../../services/api";
import BookDetails from "./BookDetails";
// import ImportBook from "./ImportBook";
// import ImportHistory from "./ImportHistory";

export const Book = () => {

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
                to={'/librarian-homepage/book/book-list'}>
                Book List</NavLink>
            {/* <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/book/import-book'}>
                Import Book</NavLink> */}
            {/* <NavLink className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                to={'/admin-homepage/book/import-history'}>
                Import History</NavLink> */} 
        </div>


        <Routes>
            <Route path="/book-list" element={<BookDetails/>} />
            {/* <Route path="/import-book" element={<ImportBook/>} /> */}
            {/* <Route path="/import-history" element={<ImportHistory/>} /> */}
        </Routes>
        

    </>)
}