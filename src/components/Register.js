import React, { useState } from 'react'
import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import{useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
// import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
const Register = () => {

    const [error,setError] = useState();
    const navigate = useNavigate();
     // formik
     const formik = useFormik({

        initialValues:{
            name:'',
            userName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        },

        validationSchema: Yup.object({
                
                userName:Yup.string()
                .required('Required'),

                password:Yup.string().min(5,'minimum 5 characters required')
                .required('Required'),

                email:Yup.string().email('Invalid email address')
                .required('Required'),
                
                confirmPassword:Yup.string()
                .required('Required'),
               
        }),
        onSubmit:(values)=>{
            // resetForm({values :''})
           const {password,email,confirmPassword,userName}= values;
           console.log(password,email,confirmPassword,userName);
        console.log('first')
        if(password!=confirmPassword) setError('Enter valid password')
        else{
            setError('')
            const username = userName
            axios.post('https://imbdclonebackend.onrender.com/api/signup',{password,email,username})
                .then(msg => {
                    console.log(msg)
                     navigate('/login')
                })
                .catch(err => {console.log(err)
                    setError(err.response.data)
                })
                }

    }
    })
  return (
    <div className='register'>
        <div className="registercon">
            <h3>SHOPY</h3>
            <div className="regtitle">
                <h3>CREATE AN ACCOUNT</h3>
                <img className='img2' src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="" />
            </div>
            <p className='errpass'>{error}</p>
            <div className="containerDatas">
            <form  className="registerdata">
                <div className="leftform rfm">

                    <input  value={formik.values.userName} name='userName' type="text" className="username" onChange={formik.handleChange}  onBlur={formik.handleBlur}  placeholder='username' />
                    { formik.touched.userName && formik.errors.userName?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.userName}</p>:null}

                    <input  value={formik.values.password}  name='password' type="text" className="password" onChange={formik.handleChange}  onBlur={formik.handleBlur}  placeholder='password' />
                    { formik.touched.password && formik.errors.password?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.password}</p>:null}

                </div>
                <div className="rightform rfm">

                        <input  value={formik.values.email}  name='email' type="text" className="email" onChange={formik.handleChange}  onBlur={formik.handleBlur}  placeholder='email' />            
                        { formik.touched.email && formik.errors.email?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.email}</p>:null}

                        <input  value={formik.values.confirmPassword}  name='confirmPassword' type="password" className="confirmpass" onChange={formik.handleChange}  onBlur={formik.handleBlur}  placeholder='confirm password' />
                        { formik.touched.confirmPassword && formik.errors.confirmPassword?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.confirmPassword}</p>:null}

                </div>
                </form>
            <div className="policy">
                By creating an account i consent to the processing of my personal data in accordance withe the <span className='
                spanpolicy'
                >PRIVACY POLICY</span>
            </div>
            <div className="createaccountbtn">
                <button onClick={formik.handleSubmit}  className='btncrtacc'>
                    CREATE ACCOUNT
                </button>
                <button  className='btn1'>
                    <Link style={{color:'inherit'}} to={'/login'}>LOGIN</Link>
                </button>
            </div>
            
           
            </div>
        </div>
    </div>
  )
}

export default Register