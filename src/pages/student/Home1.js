import { useEffect, useState } from "react"
import { Link, useNavigate, NavLink, Route, Routes } from 'react-router-dom';
import { getStudentData, getBookDataByBookCode } from '../../services/api';


export const Home1 = () => {
    const [student, setStudent] = useState({});
    const [book, setBook] = useState({});

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {

        const fetchData = async () => {
            if (!(localStorage.getItem('active-login') === 'STUDENT')) {
                navigate('/student');
            }

            setLoading(true);
            const token = localStorage.getItem('library-login');
            if (token === null) {
                navigate('/student');
            } else {
                const response = await getStudentData();
                if (response.data) {
                    const response2 = await getBookDataByBookCode(response.data.bookCode);
                    setBook(response2.data.data);
                    setStudent(response.data);
                    setLoading(false);
                } else {
                    setLoading(false);
                    navigate('/student');
                }
            }
        }

        fetchData();

    }, [])

    if (loading) {
        return (<><h3>Loading...</h3></>)
    }

    return (<>

        <p>Active Book - Status : {student.bookStatus ? 'true' : 'false'}</p>
        <div>

            {
                student.bookStatus ?
                    <>
                        <div>
                            <p> Book Code : {student.bookCode}  </p>
                        </div>

                        <div>
                                <p>Book Details</p>
                                <p>Book Title {book.title} </p>
                                <p>Book Author {book.author} </p>
                                <p>Book Price {book.price} </p>
                        </div>

                    </> : <>
                        <div>
                            <p> Hi, You Don't Have Book, You Can Take From Library.</p>
                        </div>

                    </>
            }
        </div>


    </>)

}