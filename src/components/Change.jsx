import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Topbar } from './Topbar'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { toast } from 'react-toastify'
import { Audio } from 'react-loader-spinner'
export const Change = () => {
  let params = useParams()
  let [flag,setFlag] = useState(false)
  let [newPassword,setNewPassword] = useState()
  let [cPassword,setCPassword] = useState()
  let navigate = useNavigate()
    let getData = async ()=>{
        try {
            let id = params.id
            let password = params.string 
            console.log(id,password)
            let value = {
                id:id,
                password:password
            }
            let res = await AxiosService.post(ApiRoutes.check.path,value,{
                authenticate:ApiRoutes.check.authenticate
            })
            if(res.status===200){
                setFlag(true)

            }
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
 
    }
    let handleSubmit = async ()=>{
        try {
            event.preventDefault()
            if(newPassword===cPassword){
                let id = params.id
                let password = cPassword
                let value = {
                    id:id,
                    password:password
                }
                let res = await AxiosService.put(ApiRoutes.change.path,value,{
                    authenticate:ApiRoutes.change.authenticate
                })
                if(res.status===200){
                    toast.success("password changed successfully-try login")
                    navigate("/")

                }
            

            }
            else{
                toast.error("passowrds do not match")
            }
            
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return <>
  <Topbar></Topbar>
  {
    flag?<>
    <div className='container mt-5'>
    <h5 className='h5 text-center'>passwordChange form</h5>
    <form className='mt-2' onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
    <label htmlFor="newpassword" className="form-label">New password</label>
    <input type="password" className="form-control" id="newpassword" onChange={()=>{setNewPassword(event.target.value)}}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm password</label>
    <input type="password" className="form-control" id="cpassword" onChange={()=>{setCPassword(event.target.value)}}/>
   
  </div>
  
 

  <button type="submit" className="btn btn-primary ">Submit</button>
</form>

  </div></>:<>
    <div className='container mt-5'>
    <Audio></Audio>
  </div></>
  }
  
  </>
}
