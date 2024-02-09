import React from 'react'
import { Topbar } from './Topbar'
import ApiRoutes from '../utils/ApiRoutes'
import AxiosService from '../utils/AxiosService'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { useEffect } from 'react'

export const Dashboard = () => {

    let [data,setData] =  useState({})
   
    // let navigate = useNavigate()
    
    let getData = async ()=>{
        
        try {
            let id = sessionStorage.getItem("id")
            console.log(id)
          let res = await AxiosService.get(`${ApiRoutes.get_user.path}/${id}`,{
            authenticate:ApiRoutes.get_user.authenticate
          })
          // console.log(res.status)
          if(res.status===200){
            
            setData(res.data.data)
          }
          
        } catch (error) {
          toast.error(error.response.data.message)
          if(error.response.status===402){
            // logout()
            console.log("logout")
         }
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return <>
   <Topbar></Topbar>
   <div className='container mt-2 text-center col-lg-6 col-sm-10'>
    <h3 className='h3  mb-1'>User profile</h3>
    <div className='card mt-5 shadow'>
      <div className='text-center'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" className="card-img-top mt-1" alt="..." style={{width:"15em"}}/>
      </div>
      <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">Email:{data.email}</p>
     
    </div>
  </div>
  </div>
  </>
    
  
}
