const ApiRoutes = {
    create_user:{
        path:"/user/createuser",
        authenticate:"false"
    },
    Log_in:{
        path:"/user/login",
        authenticate:false
    },
    forget:{
        path:"/user/forgetpassword",
        authenticate:false
    },
    get_user:{
        path:"/user/getuser",
        authenticate:true
    },
    check:{
        path:"/user/checkpassword",
        authenticate:true
    },
    change:{
        path:"/user/changepassword",
        authenticate:true
    }
}
export default ApiRoutes