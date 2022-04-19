import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerStudent } from "../../services/api";


const StudentRegister = () => {

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', mobile: '', password: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => { }, [])

    const handleChange = (e) => {
        setFormData((preData) => {
            return { ...preData, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async () => {

        const { firstName, lastName, email, mobile, password } = formData;

        if (firstName === '' || lastName === '' || email === '' || mobile === '' || password === '') {
            toast("Hi, First Enter Require Field Data")
            return;
        }

        try {
            setLoading(true);

            const response = await registerStudent(formData);
            if (response.data.status) {
                toast(response.data.code);
                setFormData({firstName:'',lastName:"",email:"",mobile:'',password:''})
            } else {
                toast(response.data.code);

            }
            setLoading(false);
        } catch (error) {
                console.log(error);
        }

    }


    return (<>
        <div className="container" >
            <div>
                <p>Student Registration Form</p>
            </div>
            <div className="row " >
                <div className="col-12 col-sm-4">
                    FirstName:<input onChange={handleChange} value={formData.firstName} type={'text'} name='firstName' className="form-control" />

                </div>
                <div className="col-12 col-sm-4">
                    LastName:<input onChange={handleChange} value={formData.lastName} type={'text'} name='lastName' className="form-control" />

                </div>
                <div className="col-12 col-sm-4">

                    Email:<input onChange={handleChange} value={formData.email} type={'text'} name='email' className="form-control" />
                </div>
                <div className="col-12 col-sm-4">

                    Mobile:<input onChange={handleChange} value={formData.mobile} type={'text'} name='mobile' className="form-control" />
                </div>

                <div className="col-12 col-sm-4">
                    Password:<input onChange={handleChange} value={formData.password} type={'text'} name='password' className="form-control" />

                </div>
                <div className="col-12 col-sm-4 pt-4 d-flex justify-content-center" >
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline-secondary" >
                        {
                            loading ? 'Loading...' : 'Register'
                        }


                    </button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>)

}


export default StudentRegister;