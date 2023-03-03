import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { adminLogin, librarianLogin, studentLogin } from "../../services/api"

export function LoginStudent({ loginUser , email,password }) {

    const [formData, setFormData] = useState({
        email,password
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{

        if ((localStorage.getItem('active-login') == 'ADMIN')&& (loginUser==='ADMIN')) {
            navigate('/admin-homepage/home/home1'); 
        }

        if ((localStorage.getItem('active-login') == 'LIBRARIAN')&& (loginUser==='LIBRARIAN')) {
            navigate('/librarian-homepage/home/home1'); 
        }

        if ((localStorage.getItem('active-login') == 'STUDENT')&& (loginUser==='STUDENT')) {
            navigate('/student-homepage/home/home1'); 
        }

    },[loginUser])


  


    const handleInput = (e) => {
        setFormData((preData) => {
            return { ...preData, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async () => {

        if (!formData || !formData.email || !formData.password) {
            toast("Hi, First Enter Email and Password")
            return;
        }
        if (loginUser === 'ADMIN') {
            setLoading(true);
            let response;
            try {
                response = await adminLogin(formData);
                const token = response.headers['authorization'];
                if (response.data.login) {
                    localStorage.setItem('library-login', token);
                    localStorage.setItem('active-login', 'ADMIN');
                    navigate('/admin-homepage/home/home1');
                } else {
                    toast(response.data.code)
                    setLoading(false);
                }

            } catch (error) {
                toast(response.data.code)
                setLoading(false);

            }



        }
        if (loginUser === 'LIBRARIAN') {
            setLoading(true);

            let response;
            try {
                response = await librarianLogin(formData);
                const token = response.headers['authorization'];
                if (response.data.login) {
                    localStorage.setItem('library-login', token);
                    localStorage.setItem('active-login', 'LIBRARIAN');
                    navigate('/librarian-homepage/home/home1');
                } else {
                    toast(response.data.code)
                    setLoading(false);
                }

            } catch (error) {
                toast(response.data.code)
                setLoading(false);

            }

        }
        if (loginUser === 'STUDENT') {

            setLoading(true);

            let response;
            try {
                response = await studentLogin(formData);
                const token = response.headers['authorization'];
                if (response.data.login) {
                    localStorage.setItem('library-login', token);
                    localStorage.setItem('active-login', 'STUDENT');
                    navigate('/student-homepage/home/home1');
                } else {
                    toast(response.data.code)
                    setLoading(false);
                }

            } catch (error) {
                toast(response.data.code)
                setLoading(false);

            }
        }
    }



    return (<>


        <div className=" row pt-5  d-flex  mt-5   justify-content-center ">


            <div className=" border   col-12 col-sm-6 col-lg-4 p-4 ">
                <div className="text-center">
                    <h3>{loginUser} LOGIN</h3>
                </div>
                <div class="row  ">
                    <div class=" col-12  ">
                        <label for="validationCustom01" class="form-label">Email</label>
                        <input onChange={handleInput} value={email}  type="text" name="email" class="form-control" required />

                    </div>
                </div>

                <div className="row">

                    <div class=" col-12   ">
                        <label for="validationCustom02" class="form-label">Password</label>
                        <input onChange={handleInput} value={password} type="text" name="password" class="form-control" required />

                    </div>
                </div>

                <div className="row">

                    <div class="col-12  pt-2 text-center">
                        <button onClick={handleSubmit} class="btn btn-primary">
                            {
                                loading ? 'loading...' : 'Login'
                            }


                        </button>
                    </div>
                    <ToastContainer />
                </div>
            </div>


        </div>


    </>)
}