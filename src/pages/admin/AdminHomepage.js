import { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink, Route, Routes } from 'react-router-dom';
import { Book } from './Book';
import { Home } from './Home';
import { Librarian } from './Librarian';
import { Student } from './Student';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Container} from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAdminData } from '../../services/api';
import Animations from '../../components/Animations';
import { Account } from './Account';


const AdminHomepage = () => {

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [admin,setAdmin] = useState({});
    const [navLink,setNavLink] = useState({
        home:false,student:false,librarian:false,account:false,book:false
    })

    const [navLinkArray,setNavLinkArray]=useState(['home','student','librarian','book','account']);
    
    useEffect(() => {

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
                    
                    const response=await getAdminData();
                    if(response.status===200){
                        setLoading(false);
                        
                        setAdmin(response.data);
                        
                    }else{
                        navigate('/admin');
                    }
                }
            } catch (error) {
                
            }
        }

        fetchData();
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
                <div className='col-12 col-sm-2 p-0 '>
                    <div className='list-unstyled sidebar '>

                        <div className='d-flex justify-content-center py-2'>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <p>{admin.firstName} {' '} { admin.lastName}</p>
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
                                to={'/admin-homepage/home/home1'} 
                                id={navLink.home? 'sidebar-link-active':''}
                                
                                >  
                                Home
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink onClick={()=>{
                                return handleLink('student')
                            }} 
                            id={navLink.student? 'sidebar-link-active':''}
                            className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "} to={'/admin-homepage/student/student-list'} >
                                student

                            </NavLink>
                        </li>
                
                        <li className=''>
                            <NavLink onClick={()=>{
                                return handleLink('librarian')
                            }}
                            id={navLink.librarian? 'sidebar-link-active':''} 
                            className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "} to={'/admin-homepage/librarian/librarian-list'} >
                                librarian
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink onClick={()=>{
                                return handleLink('book')
                            }} 
                            id={navLink.book? 'sidebar-link-active':''}
                            className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "} to={'/admin-homepage/book/book-list'} >
                                book
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink onClick={()=>{
                                return handleLink('account')
                            }} 
                            id={navLink.account? 'sidebar-link-active':''}
                            className={({ isActive }) => isActive ? "text-decoration-none text-dark ms-1 sidebar-link sidebar-link-active " : "text-decoration-none text-dark ms-1 sidebar-link "} to={'/admin-homepage/account/my-account'} >
                             Account
                            </NavLink>
                        </li>

                    </div>
                </div>



                <div className='playground col-sm-10 col-12 p-0'>
                    <div className='text-center border-bottom'>
                        <h6 className='p-1' >ADMIN DASHBOARD</h6>

                    </div>
                    <Routes>
                        <Route path="/home/*" element={<Home />} />
                        <Route path="/student/*" element={<Student />} />
                        <Route path="/librarian/*" element={<Librarian />} />
                        <Route path="/book/*" element={<Book />} />
                        <Route path="/account/*" element={<Account/>} />
                    </Routes>

                </div>
            </div>


        </div>

    </>)
}

export default AdminHomepage;