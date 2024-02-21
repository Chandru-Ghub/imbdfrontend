import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieData from './components/MovieData';
import { useEffect } from 'react';
import { authAxios } from './axiosInterceptor/AxiosInterceptor';
import { useDispatch } from 'react-redux';
import { movieDetails } from './redux/MoviesSlice';
import WishList from './components/WishList';
import Dashboard from './components/Dashboard';

function App() {

  const dispatch = useDispatch()
  const access = localStorage.getItem('imdbtoken') 
  useEffect(()=>{
    authAxios.get('/movies')
    .then(res => {
      console.log(res)
        dispatch(movieDetails(res.data))
    })
    .catch(err => {
      console.log(err)
    })
},[])
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {access?<Home/>:<Login/>} />
              <Route path='/movies/:id' element = {<MovieData/>} />
              <Route path='/login' element = {<Login/>} />
              <Route path='/register' element = {<Register/>} />
              <Route path='/wishlist' element = {<WishList/>} />
              <Route path='/dash' element = {<Dashboard/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
