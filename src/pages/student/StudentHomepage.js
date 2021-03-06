import { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Container} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import { getStudentData } from '../../services/api';
import Animations from '../../components/Animations';
import { Account } from './Account';


const StudentHomepage = () => {

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [student,setStudent] = useState({});
    const [navLink,setNavLink] = useState({
        home:false,student:false,librarian:false,account:false,book:false
    })

    const [navLinkArray,setNavLinkArray]=useState(['home','account']);
    
    useEffect(() => {


            navLinkArray.forEach((value)=>{
                if(window.location.pathname.includes(value)){
                    setNavLink({
                        home:false,student:false,librarian:false,account:false,book:false
                    })
                    setNavLink((preData)=>{
                        return {...preData,[value]:true}
                    })
                }
            })
        
        


        const fetchData= async ()=>{

            if(!(localStorage.getItem('active-login')==='STUDENT')){
                navigate('/student');
            }

            setLoading(true);
            const token = localStorage.getItem('library-login');
            if (token === null) {
                navigate('/student');
            } else {
                const response=await getStudentData();
                if(response.data){
                    setLoading(false);
                    setStudent(response.data);
                    
                }else{
                    setLoading(false);
                    navigate('/student');
                }
            }
        }

        fetchData();

    }, []);


    const logout = () => {
        localStorage.clear('library-login')
        localStorage.clear('active-login')
        navigate('/');
    }


    if(loading){
        return(<>
                <Animations/>
        </>)
    }


    const handleLink=(active)=>{
                setNavLink({
                    home:false,student:false,librarian:false,account:false,book:false
                })

                setNavLink((preData)=>{
                    return {...preData,[active]:true}
                })
    }


    return (<>




        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-2 p-0   '>
                    <div className='list-unstyled sidebar '>

                        <div className='d-flex justify-content-center py-2'>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <p>{student.firstName} {' '} { student.lastName}</p>
                        </div>
                        <div onClick={logout} className='d-flex justify-content-center py-2 border-bottom font-monospace logout-section'>
                            <LogoutIcon/> Logout
                        </div>


                        <li className=''>
                            <NavLink 
                                onClick={()=>{
                                    return handleLink('home')
                                }}
                                className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                                to={'/student-homepage/home/home1'} 
                                id={navLink.home? 'sidebar-link-active':''}
                                
                                >  
                                Home
                            </NavLink>
                        </li>
                       
                        <li className=''>
                            <NavLink onClick={()=>{
                                return handleLink('account')
                            }} 
                            id={navLink.account? 'sidebar-link-active':''}
                            className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "}
                             to={'/student-homepage/account/my-account'} >
                             Account
                            </NavLink>
                        </li>

                        




                    </div>
                </div>



                <div className='playground col-sm-10 col-12 p-0  '>
                    <div className='text-center border-bottom'>
                        <h6 className='p-1' >STUDENT DASHBOARD</h6>

                    </div>
                    <Routes>
                        <Route path="/home/*" element={<Home />} />
                        <Route path="/account/*" element={<Account/>} />
                    </Routes>

                </div>
            </div>


        </div>

    </>)
}

export default StudentHomepage;