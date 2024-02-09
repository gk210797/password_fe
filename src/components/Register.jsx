import React from 'react'
import { Topbar } from './Topbar'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()
    let navigate = useNavigate()

    let handleSubmit = async ()=>{
        try {
            event.preventDefault()
            let value = {
                name:name,
                email:email,
                password:password
            }
            let res = await AxiosService.post(ApiRoutes.create_user.path,value,{
                authenticate:ApiRoutes.create_user.authenticate
            })
            if(res.status===200){
                toast.success("Registered successfully")
                navigate("/")
            }
            else if(res.status ===400){
                toast.error("user already exists")
            }
            
        } catch (error) {
            toast.error("Internal server error")
        }
    }
  return <>
   <Topbar></Topbar>
  <div className='container col-lg-4 col-sm-12 mt-5' >
    <h5 className='text-center h5'>Get Registered</h5>
  <form className='mt-2' onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Name</label>
    <input type="text" className="form-control" id="email" required  onChange={()=>{setName(event.target.value)}}/>
  </div>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Email address</label>
    <input type="email" className="form-control" required id="Email" onChange={()=>{setEmail(event.target.value)}}/>
  </div>

  <div className="mb-1">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" required id="Password" onChange={()=>{setPassword(event.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
  </div>
  </> 
 
}
