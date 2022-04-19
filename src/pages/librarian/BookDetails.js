import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBook, getAllBookStore } from "../../services/api";

const BookDetails=()=>{

    const [bookArray,setBookArray] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate= useNavigate();

    useEffect(()=>{

        const fetchData= async ()=>{

            try {

                if(!(localStorage.getItem('active-login')==='LIBRARIAN')){
                    navigate('/librarian');
                }
                
                setLoading(true);
                const token = localStorage.getItem('library-login');
                if (token === null) {
                    navigate('/librarian');
                } else {
                    
                    const response=await getAllBook();
                    if(response.data.status){
                        setLoading(false);
                        setBookArray(response.data.book);
                    }else{
                        navigate('/librarian');
                    }

                   
                }
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

    const List=({value,index})=>{
        
        return(<>
                <tr>
                    <td>{index+1}</td>
                    <td>{value.bookCode}</td>
                    <td>{value.title}</td>
                    <td>{value.author}</td>
                    <td>{value.price}</td>
                    <td>{value.totalQuantity}</td>   
                    <td>{value.issueQuantity}</td>   
                    <td>{value.totalQuantity-value.issueQuantity}</td>   
                </tr>
        </>)
    }

    return(<>

        <div className="container ">
            <p>Librarian List</p>
                <table className="table " >
                    <tr>
                        <th>No</th>
                        <th>Code</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>TotalQuantity</th>
                        <th>IssueQuantity</th>
                        <th>AvailableQuantity</th>
                    </tr>
                    
                        {
                            bookArray.map((value,index)=>{
                                return(<>
                                        <List value={value} key={index} index={index} />
                                </>)
                            })
                        }
                    
                </table>
        </div>
    
    </>)

}


export default BookDetails;