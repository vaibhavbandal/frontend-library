import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIssueReturnHistory } from "../../services/api";

export const IssueReturnHistory=()=>{

    const [issueReturnHistory,setIssueReturnHistory] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate= useNavigate();

    useEffect(()=>{

        const fetchData= async ()=>{

            try {

                if(!(localStorage.getItem('active-login')==='LIBRARIAN')){
                    navigate('/admin');
                }
                
                setLoading(true);
                const token = localStorage.getItem('library-login');
                if (token === null) {
                    navigate('/admin');
                } else {
                    
                    const response=await getIssueReturnHistory();
                    if(response.data.status){
                        setLoading(false);
                        setIssueReturnHistory(response.data.data);
                    }else{
                        navigate('/admin');
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
        const [date,setDate]= useState(new Date(value.date));
        return(<>
                <tr>
                    <td>{index+1}</td>
                    <td>{value.bookCode}</td>
                    <td>{date.toLocaleDateString()}</td>
                    <td>{ date.toLocaleTimeString()}</td>
                    <td>{value.studentEmail}</td>
                    <td>{value.librarianEmail}</td>
                    <td>{value.type}</td>   
                </tr>
        </>)
    }

    return(<>

        <div className="container ">
            <p>Librarian List</p>
                <table className="table " >
                    <tr>
                        <th>No</th>
                        <th>BookCode</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>StudentEmail</th>
                        <th>LibrarianEmail</th>
                        <th>Type</th>
                    </tr>
                    
                        {
                            issueReturnHistory.map((value,index)=>{
                                return(<>
                                        <List value={value} key={index} index={index} />
                                </>)
                            })
                        }
                    
                </table>
        </div>
    
    </>)

}


