import { useEffect, useState } from "react"
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { changePasswordAdmin, changePasswordStudent, getStudentData } from "../../services/api";

export const ChangePassword = () => {

    const [formData,setFormData]= useState({password:'',newPassword:''})
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
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
                    navigate('/student');
                }
            }
        }
        fetchData();
    }, [])

    const handleInput=(e)=>{
        setFormData((preData)=>{return {...preData,[e.target.name]:e.target.value}})
    }

    const handleSubmit= async()=>{
        if(formData.newPassword===''||formData.password===''){
            toast("Enter Input Data!");
            return;
        }

        if(student.email===''){
            toast("Email is not found!");
            return;
        }

        try {
            setLoadingBtn(true);
            const postData={email:student.email,password:formData.password,newPassword:formData.newPassword};
            const response = await changePasswordStudent(postData);
            setLoadingBtn(false);
            if(response.data.status){
                setFormData({password:'',newPassword:''});
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
            <p>Student Password Reset</p>
        </div>
        <div className="col-12  col-sm-3">
        Old Password:<input onChange={handleInput}   className="form-control" value={formData.password} type={'text'} name='password'/>

        </div>
        <div className="col-12  col-sm-3">
        New Password:<input  onChange={handleInput}  className="form-control" value={formData.newPassword} type={'text'} name='newPassword'/>

        </div>
        <div className="col-12  col-sm-4 pt-4">

        <button onClick={handleSubmit} className="btn btn-danger" >
            
            {
                loadingBtn ? 'loading...':'Change Password'
            }
             
             
             </button>
        </div>
    </div>

    <ToastContainer/>
        

    </>)
}