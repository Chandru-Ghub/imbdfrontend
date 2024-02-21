// import { Link } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import{useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { userDetails } from '../redux/MoviesSlice'


const Login = () => {
    const navigate = useNavigate()
    const [error,setError] = useState('');
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch()

    // formik
    const formik = useFormik({

        initialValues:{
          
            userName:'',
            password:''
         
        },

        validationSchema: Yup.object({

                
                userName:Yup.string()
                .required('Required'),

                password:Yup.string().min(5,'minimum 5 characters required')
                .required('Required'),
               
        }),
        onSubmit:(values)=>{
            setOpen(true)
           const {password,userName}= values;       
            setError('')
            const email = userName
            axios.post('https://imbdclonebackend.onrender.com/api/signin',{email,password})
                .then(msg => {
                    console.log(msg.data)
                    dispatch(userDetails(msg.data.data.username))
                    const isAdmin = msg.data.data.isAdmin;
                    window.localStorage.setItem('imdbtoken',msg.data.token)
                    window.localStorage.setItem('imdbstatus',isAdmin,msg.data.data.username)
                    setOpen(false)
                    window.location.href = '/'
                    

                })
                .catch(err => {console.log(err)
                    setError('Check your connection')
                })
                

    }
    })
  return (
    <div className='login'>
                      <div>
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
</div>
        <div className='register'>
            <div className="demo">
                <p>Demo User</p>
                <div>
                    <p>email: <span>chandru@gmail.com</span></p>
                    <p>password: <span>12345</span></p>
                </div>
            </div>
        <div className="registercon loginpg">
            <div className="regtitle">
                <h3>SIGN IN</h3>
                <img src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="" />
            </div>
            <p className='errpass'>{error}</p>
            <form  className="registerdata">
                <div className="leftform rfm">
                    <input value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name ='userName' className="username" placeholder='Email id' />
                    { formik.touched.userName && formik.errors.userName?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.userName}</p>:null}
                    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name = 'password' className="password" placeholder='password' />
                    { formik.touched.password && formik.errors.password?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.password}</p>:null}
                </div>
               
            </form>

            <div className="forgotpass">
          
                <Link><p className='fpp'>Forgot Password?</p></Link>
                <Link to={'/register'}><>Create New Account</></Link> 
            </div>
            <div className="createaccountbtn">
                <button onClick={formik.handleSubmit} className='btncrtacc'>
                    LOGIN
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login