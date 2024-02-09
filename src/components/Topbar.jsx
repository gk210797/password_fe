import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useHooks } from '../hooks/useHooks'

export const Topbar = () => {
let navigate = useNavigate()
let logout = useHooks()
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FP-flow</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/register")}}>Register</a>
        </li>
      
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-success" type="submit" onClick={()=>{logout()}}>Logout</button>
      </form>
    </div>
  </div>
</nav>
  </>
}
