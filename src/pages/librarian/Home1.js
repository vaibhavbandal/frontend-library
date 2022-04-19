import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBook , getAllLibrarianData, getAllStudentData } from "../../services/api";

const Home1=()=>{

    const [bookArray,setBookArray] = useState([]);
    const [studentArray,setStudentArray] = useState([]);
    const [librarianArray,setLibrarianArray] = useState([]);
    const [summary,setSummary] = useState({});
    const [loading,setLoading] = useState(false);
    const navigate= useNavigate();

    useEffect(()=>{

        const fetchData= async ()=>{

            try {

                const response=await getAllBook();
                const response2 = await getAllStudentData();
                const response3 = await getAllLibrarianData();
                console.log(response3.data)
                if(response.data.status&&response2.data.status&&response3.data.status){
                    

                    setStudentArray(response2.data.student);
                    setBookArray(response.data.book);
                    setLibrarianArray(response3.data.librarian);

                    let totalBooksQuantity=0;
                    let totalIssueQuantity=0;
                    let totalAvailable=0;
                    for (const book of response.data.book) {
                         totalBooksQuantity+=book.totalQuantity 
                         totalIssueQuantity+=book.issueQuantity 
                         totalAvailable+=book.totalQuantity-book.issueQuantity
                    }

                    setSummary({
                        totalBooks:response.data.book.length,
                        totalBooksQuantity:totalBooksQuantity,
                        totalIssue:totalIssueQuantity,
                        totalAvailable:totalAvailable,
                        totalStudent:response2.data.student.length,
                        totalLibrarian:response3.data.librarian.length,
                    })
                }else{
                    
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();



    },[]);

    if(loading){
        return(<>
        
                <h2>Loading...</h2>
        </>)
    }

   
    return(<>

        <div className="container  text-center">
            <p>SUMMARRY</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Type Books</p>
                <p>{summary.totalBooks}</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Books Quantity</p>
                <p>{summary.totalBooksQuantity}</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Issue</p>
                <p>{summary.totalIssue}</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Available</p>
                <p>{summary.totalAvailable}</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Student</p>
                <p>{summary.totalStudent}</p>
        </div>

        <div className="border d-inline-block p-3 ms-2 text-center">
                <p>Total Librarian</p>
                <p>{summary.totalLibrarian}</p>
        </div>
    
    </>)

}


export default Home1;