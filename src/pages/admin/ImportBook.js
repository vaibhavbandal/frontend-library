import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkBookCode, importBook } from "../../services/api";


const ImportBook = () => {

    const [formData, setFormData] = useState({
        bookCode: '', quantity: 0, title: '', author: '',
        price: ''
    });
    const [loading, setLoading] = useState(false);

    const [importNew, setImportNew] = useState(false);
    const [importExisting, setImportExisting] = useState(false);


    // useEffect(() => { 

    // },[])

    const handleChange = (e) => {
        setFormData((preData) => {
            return { ...preData, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit1 = async () => {

        const { bookCode } = formData;

        if (bookCode === '') {
            toast("Hi, First Enter Book Code")
            return;
        }

        try {
            setLoading(true);
            const response = await checkBookCode(formData);
            if (response.data.status) {
                toast(response.data.code);
                setImportExisting(true);
            } else {
                setImportNew(true);
                toast("Register New Book");
            
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit2 =async() => {
        const { bookCode,quantity } = formData;

        if (quantity===0) {
            toast("Hi, Quantity should not be 0!")
            return;
        }

        try {
            setLoading(true);
            const response = await importBook(formData);
            setLoading(false);
            if (response.data.status) {
                toast(response.data.code);
                setImportNew(false);
                setImportExisting(false);
                setFormData({
                    bookCode:'',quantity:0,author:'',title:'',price:''
                })
            } else {
                toast(response.data.code);

            }
        } catch (error) {
            console.log(error);
        }


     }

    const handleSubmit3 =async () => {
        const { bookCode,quantity,title,author,price } = formData;

        if (bookCode === ''||quantity===0||title===''||author===''||price==='') {
            toast("Hi, Enter Data First!")
            return;
        }

        try {
            setLoading(true);
            const response = await importBook(formData);
            setLoading(false);
            if (response.data.status) {
                toast(response.data.code);
                setImportNew(false);
                setImportExisting(false);
                setFormData({
                    bookCode:'',quantity:0,author:'',title:'',price:''
                })
            } else {
                toast(response.data.code);

            }
        } catch (error) {
            console.log(error);
        }
    }


    return (<>
        <div className="container" >
            <div>
                <p>Import Book</p>
            </div>

            <div className="row " >




                {

                    importNew ? <>
                        <p>Register New Book</p>

                        <div className="col-12 col-sm-4">
                            Book Code:<input value={formData.bookCode} type={'text'} name='bookCode' className="form-control" />
                        </div>
                        <div className="col-12 col-sm-4">
                            Book quantity:<input onChange={handleChange} value={formData.quantity} type={'number'} name='quantity' className="form-control" />
                        </div>
                        <div className="col-12 col-sm-4">
                            Title:<input onChange={handleChange} value={formData.title} type={'text'} name='title' className="form-control" />
                        </div>
                        <div className="col-12 col-sm-4">
                            Author:<input onChange={handleChange} value={formData.author} type={'text'} name='author' className="form-control" />
                        </div>
                        <div className="col-12 col-sm-4">
                            Price:<input onChange={handleChange} value={formData.price} type={'text'} name='price' className="form-control" />
                        </div>
                        <div className="col-12 col-sm-4 pt-4 d-flex justify-content-center" >
                            <button
                                onClick={handleSubmit3}
                                className="btn btn-outline-secondary" >
                                {
                                    loading ? 'Loading...' : 'Import New'
                                }
                            </button>
                        </div>


                    </> : <>

                        {
                            importExisting ? <>
                                <div className="col-12 col-sm-4">
                                    Book Code:<input value={formData.bookCode} type={'text'} name='bookCode' className="form-control" />
                                </div>
                            </> : <>

                                <div className="col-12 col-sm-4">
                                    Book Code:<input onChange={handleChange} value={formData.bookCode} type={'text'} name='bookCode' className="form-control" />
                                </div>
                            </>
                        }


                        {
                            importExisting ? <>

                                <div className="col-12 col-sm-4">
                                    quantity:<input onChange={handleChange} value={formData.quantity} type={'number'} name='quantity' className="form-control" />
                                </div>
                                <div className="col-12 col-sm-4 pt-4 d-flex justify-content-center" >
                                    <button
                                        onClick={handleSubmit2}
                                        className="btn btn-outline-secondary" >
                                        {
                                            loading ? 'Loading...' : 'Import Existing'
                                        }
                                    </button>
                                </div>

                            </> : <>

                                <div className="col-12 col-sm-4 pt-4 d-flex justify-content-center" >
                                    <button
                                        onClick={handleSubmit1}
                                        className="btn btn-outline-secondary" >
                                        {
                                            loading ? 'Loading...' : 'Check Book Code'
                                        }
                                    </button>
                                </div>
                            </>
                        }


                    </>
                }



            </div>
        </div>
        <ToastContainer />
    </>)

}


export default ImportBook;