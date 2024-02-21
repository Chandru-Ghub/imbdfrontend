import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeMovie } from '../redux/WishlistSlice'
import Footer from './Footer'
import Navbar from './Navbar'

const WishList = () => {
    const dispatch = useDispatch()
    const {wishList,count} = useSelector((store)=>store.wishList)
  return (
    <div className='wishList'>
        <Navbar/>
        <div className='movielist'>
        <div className="topcard">
        <p className='topcast'>Wish List  <span class="material-symbols-outlined">
chevron_right
</span></p>
<div className='show'>TV shows and movies just for you</div>
        </div>
        <div className='cardContainer'>
        {
            wishList.length ? wishList.map((res,i)=>
               <div className='card' key={i}>
                 <Link to={`/movies/${res._id}`}>
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
                <button className='wishicon' onClick={()=>dispatch(removeMovie(res._id))}>
                <span class="material-symbols-outlined">
                        bookmark_add
                        </span>remove from wishlist
                </button>
               </div>
            )
        : <span  class="material-symbols-outlined glass">
        hourglass_empty
        </span>}
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default WishList