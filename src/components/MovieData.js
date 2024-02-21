import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authAxios } from '../axiosInterceptor/AxiosInterceptor'
import Navbar from './Navbar'
import '../styles/MovieData.css'
import { FaStar } from "react-icons/fa";
import MovieList from './MovieList'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { addmovie } from '../redux/WishlistSlice'

const MovieData = () => {
    const {id} = useParams()
    const [data,setData] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        authAxios.get('/getmovie/'+id)
        .then((res)=>{
            setData(res.data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='datalist'>
      <Navbar/>
        { data ?
          <>
          <div className='moviedata'>
            <div className="top">
            <h3>{data.title}</h3>
              <ul>
                <li>{data.released.slice(7)}</li> -
                <li>Not Rated </li> -
                <li>{data.runtime}</li>
              </ul>
            </div>
            <div className="mid">
            <img src={data.cardImg} alt="" />
                <div className='videos'>
                <video controls="controls" 
              class="video-stream" 
              x-webkit-airplay="allow" 
              data-youtube-id="N9oxmRT2YWw"  
    src="https://www.youtube.com/watch?v=ShsFxGV_thk"
              ></video>
                  </div>  
              </div>     
              <div className="mid1">
              {

                data.genre.split(',').map((a,i)=>
                <ul key={i}>
                <li>{a}</li>
              </ul>
                )
              }
        </div>
        <div className="mid2">
              <span ><FaStar />
              </span>
              <div>
                  {data.imdbRating} / 10
              </div>
        </div>
        <span className='wishicon' onClick={()=>dispatch(addmovie(data))}>
                    Add wishList
                <span class="material-symbols-outlined">
                        bookmark_add
                        </span>
                </span>
        <div className="lang">
          <span>Available in</span>
              {
                data.language.split(',').map((a,i)=>
                  <div key={i}>
                      {a}
                  </div>
                )
              }
        </div>
        <div className="imgs">
            {data.images.map((a)=>
                <div>
                      <img src={a} alt="" />
                </div>
            )}
        </div>
        
        </div>

        <div className="details">
        <p className='topcast'>Top Cast  <span class="material-symbols-outlined">
chevron_right
</span></p>
              <ul>
                <li><span>Actor : </span>{data.actors}</li>
                <li><span>Director : </span>{data.director}</li>
              </ul>
        </div>
        {/* <MovieList/> */}
        <Footer/>
          </> : 'loading...'
        }
    </div>
  )
}

export default MovieData