import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import '../styles/MovieList.css'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import '../styles/MovieData.css'
import { useDispatch, useSelector } from 'react-redux'
import { movieDetails } from '../redux/MoviesSlice'
import { addmovie } from '../redux/WishlistSlice'
const MovieList = () => {
    const access = localStorage.getItem('imdbtoken') 
    const dispatch = useDispatch()
    const {movies} = useSelector((store)=>store.movies)
    const {wishList,count} = useSelector((store)=>store.wishList)
  return (
    <div className='movielist'>
        <div className="topcard">
        <p className='topcast'>Top Picks  <span class="material-symbols-outlined">
chevron_right
</span></p>
<div className='show'>TV shows and movies just for you</div>
        </div>
        <div className='cardContainer'>
        {
            movies.map((res,i)=>
               <div className='card' key={i}>
                 <Link to={access ? `/movies/${res._id}`: `/login`}>
                    <img className='cardimg' src={res.cardImg} alt="" />
                    <div className="mid2" >
              <span style={{fontSize:'18px'}}><FaStar />
              </span>
              <div style={{color:'white' ,fontSize:'15px'}}>
                  {res.imdbRating} / 10
              </div>
        </div>
                    <span className='cardtitle'>{i+1 +'.   '+res.title}</span>
                </Link>
                <span className='wishicon' onClick={()=>dispatch(addmovie(res))}>
                    Add wishList
                <span class="material-symbols-outlined">
                        bookmark_add
                        </span>
                </span>
                
               </div>
            )
        }
        </div>
    </div>
  )
}

export default MovieList