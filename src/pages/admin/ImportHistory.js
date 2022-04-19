import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookImportHistory } from "../../services/api";

const ImportHistory=()=>{

    const [bookImportArray,setBookImportArray] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate= useNavigate();

    useEffect(()=>{

        const fetchData= async ()=>{

            try {

                if(!(localStorage.getItem('active-login')==='ADMIN')){
                    navigate('/admin');
                }
                
                setLoading(true);
                const token = localStorage.getItem('library-login');
                if (token === null) {
                    navigate('/admin');
                } else {
                    
                    const response=await getBookImportHistory();
                    if(response.data.status){
                        setLoading(false);
                        setBookImportArray(response.data.bookImport);
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
        
        const [date,setDate]= useState(new Date(value.importDate));

 

        return(<>  
                <tr>
                    <td>{index+1}</td>
                    <td>{value.bookCode}</td>
                    <td>{ date.toLocaleDateString()}</td>
                    <td> { date.toLocaleTimeString()} </td>
                    <td>{value.quantity}</td>
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
                        <th>Date</th>
                        <th>Time</th>
                        <th>Imported Quantity</th>
                    </tr>
                    
                        {
                            bookImportArray.map((value,index)=>{
                                return(<>
                                        <List value={value} key={index} index={index} />
                                </>)
                            })
                        }
                    
                </table>
        </div>
    
    </>)

}


export default ImportHistory;