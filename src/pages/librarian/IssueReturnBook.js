import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {  changePasswordLibrarian, getLibrarianData, issueReturnBook } from "../../services/api";

export const IssueReturnBook = () => {

    const [formData,setFormData]= useState({email:'',bookCode:'',type:'Select'})
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('library-login'); 
            if (token === null) {
                navigate('/admin');
            }
        }
        fetchData();
    }, [])

    const handleInput=(e)=>{
        setFormData((preData)=>{return {...preData,[e.target.name]:e.target.value}})
    }

    const handleSubmit= async()=>{
        if(formData.bookCode===''||formData.type===''){
            toast("Enter Input Data!");
            return;
        }

        if(formData.type==='Select'){
            toast("Select Type !");
            return;
        }
        if(formData.email===''){
            toast("Enter Student Email!");
            return;
        }

        try {
            setLoadingBtn(true);
            
            const postData={email:formData.email,bookCode:formData.bookCode,type:formData.type};
            const response = await issueReturnBook(postData);
            setLoadingBtn(false);
            if(response.data.status){
                setFormData((preData)=>{return{...preData,bookCode:'',email:'',type:"Select"}});
                toast(response.data.code);
                
            }else{
                toast(response.data.code);
            }
        } catch (error) {
            toast("ERROR SERVER")
        }


    }

    if (loading) {
        return (<>loading...</>)
    }


    return (<>

    <div className="container row d-flex justify-content-center p-4 " >
        <div className="text-center p-4">
            <p>Issue And Return Book</p>
        </div>
        <div className="col-12  col-sm-3">
        Email:<input onChange={handleInput}   className="form-control" value={formData.email} type={'text'} name='email'/>

        </div>
        <div className="col-12  col-sm-3">
        Book Code:<input  onChange={handleInput}  className="form-control" value={formData.bookCode} type={'text'} name='bookCode'/>

        </div>

        <div className="col-12  col-sm-3"> 
        Type:
            <select value={formData.type} onChange={handleInput}  name="type" className="form-select" >
                 <option name='type' >Select</option>
                 <option name='type' >ISSUE</option>
                 <option name='type' >RETURN</option>
            </select>

        </div>
        <div className="col-12  col-sm-4 pt-4">

        <button onClick={handleSubmit} className="btn btn-danger" >
            
            {
                loadingBtn ? 'loading...':'Submit'
            }
             
             
             </button>
        </div>
    </div>

    <ToastContainer/>
        

    </>)
}