import React from 'react'
import { Topbar } from './Topbar'
import { toast } from 'react-toastify'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { useState } from 'react'

export const Forget = () => {
  let [email,setEmail] = useState()

  let handleSubmit = async () =>{
    try {
      event.preventDefault()
      let value = {
        email:email
      }
      console.log(ApiRoutes.forget.path)
      let res = await AxiosService.post(ApiRoutes.forget.path,value,{
        authenticate:ApiRoutes.forget.authenticate
      })
      if(res.status===200){
        toast.success("Email sent successfully")
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return <>
  <Topbar></Topbar>
  <div className='container col-lg-4 col-dm-12 mt-5'>
    <h5 className='h5 text-center mb-2'>Submit form to get recovery email</h5>
  <form className='mt-2' onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" onChange={()=>{setEmail(event.target.value)}}/>
   
  </div>
  
 

  <button type="submit" className="btn btn-primary ">Submit</button>
</form>
  </div>
  </>
}
