import React from 'react'
import errorpage from "../assets/errorpage.jpg"
import { Link } from 'react-router-dom'


export const PageNotFound = () => {
  return (
    <div className='container'>
     <img src={errorpage} className='img-fluid'/>
     <p className='text-center'>
      <Link to="/" className='btn btn-danger'>Go to Home Page</Link>
     </p>
      </div>
  )
}
