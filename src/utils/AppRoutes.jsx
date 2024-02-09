import { Change } from "../components/Change";
import { Dashboard } from "../components/Dashboard";
import { Forget } from "../components/Forget";
import { Register } from "../components/Register";
import { Signin } from "../components/Signin";

const AppRoutes = [
    {
        path:"/",
        element:<Signin></Signin>
    },
    {
        path:"register",
        element:<Register></Register>
    },
    {
        path:"/user",
        element:<Dashboard></Dashboard>
    },
    {
        path:"/forget",
        element:<Forget></Forget>
    },
    {
        path:"/change/:id/:string",
        element:<Change></Change>
    }

    
]


export default AppRoutes