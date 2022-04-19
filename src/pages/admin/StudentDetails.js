import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllStudentData } from "../../services/api";

const StudentDetails=()=>{

    const [studentArray,setStudentArray] = useState([]);
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
                    
                    const response=await getAllStudentData();
                    if(response.data.status){
                        setLoading(false);
                        setStudentArray(response.data.student);
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
        return(<>
                <tr>
                    <td>{index+1}</td>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td>{value.type}</td>   
                    <td>{ value.bookStatus ? 'True':"False" }</td>   
                    <td>{value.bookStatus ? value.bookCode:"null"} </td>   
                </tr>
        </>)
    }

    return(<>

        <div className="container ">
            <p>Librarian List</p>
                <table className="table " >
                    <tr>
                        <th>No</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Type</th>
                        <th>Book Status</th>
                        <th>Book Code</th>
                    </tr>
                    
                        {
                            studentArray.map((value,index)=>{
                                return(<>
                                        <List value={value} key={index} index={index} />
                                </>)
                            })
                        }
                    
                </table>
        </div>
    
    </>)

}


export default StudentDetails;