import './Loader.css'
import loader from '../../assets/loading1.gif'
import { useState } from 'react'

export function Loader() {
  return(
    <>
    <div className='loader-container'>
      <img src={loader} alt="loading..." />
      
    </div>
    </>
  )
}