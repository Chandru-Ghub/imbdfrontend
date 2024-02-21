import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {wishList,count} = useSelector((store)=>store.wishList)
  const user = useSelector((store)=>store.movies)
  const login = window.localStorage.getItem('isAdmin')
  console.log(user)
  return (
    <div className='navbar'>
      <div className="imm1">
      <img src="https://m.media-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" alt="" />
      </div>
      <div className="searchbar">
        <input placeholder='Search IMDb' type="text" />
        <span class="material-symbols-outlined">
search
</span>
      </div>
      <div className="sin">
      <span className="cnt">  {count}</span>
    <Link style={{color:'inherit'}} to={'/wishlist'}>     <span class="material-symbols-outlined">
favorite
</span></Link>
      </div>
      {login ? <div className='sins'>
      <Link to={'/dash'} style={{color:'inherit'}}>    <span class="material-symbols-outlined kk">
person
</span></Link>
      </div> :<div>
          <Link to={'/login'} style={{color:'inherit'}}>SignIn</Link>
      </div>}
    </div>
  )
}

export default Navbar