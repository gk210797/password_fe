import React, { useEffect } from 'react'
import { Topbar } from './Topbar'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { useNavigate } from 'react-router-dom'


export const Signin = () => {
    let [password,setPassword] = useState()
    let [email,setEmail] = useState()
    let navigate = useNavigate()
     


    let handleSubmit = async () =>{
        try {
          event.preventDefault() 
          let value ={
            email:email,
            password:password
          }
          let res = await AxiosService.post(ApiRoutes.Log_in.path,value,{
            authenticate:ApiRoutes.Log_in.authenticate
          })
          if (res.status===200){
            sessionStorage.setItem("id",res.data.id)
            sessionStorage.setItem("token",res.data.token)
            navigate("/user")

          }
          else if (res.status===400){
            toast.error("invalid credentials")
          }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
   
    useEffect(()=>{
       sessionStorage.clear()
    })
  return <>
  <Topbar></Topbar>
  <div className='container col-lg-4 col-sm-12 mt-5' >
    <h5 className='text-center h5'>Login into continue</h5>
  <form className='mt-2' onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" onChange={()=>{setEmail(event.target.value)}}/>
   
  </div>
  <div className="mb-1">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" onChange={()=>{setPassword(event.target.value)}}/>
  </div>
  <div id="emailHelp" className="form-text mb-3"><a onClick={()=>{navigate("/forget")}}>forget password?</a></div>
 

  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
  </div>
  
  </>
}
