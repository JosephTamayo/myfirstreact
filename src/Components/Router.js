import Home from "./Home"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Employee from "./Employee"
import AddEmployee from './AddEmployee';

const Router = () =>{
    return(
        <div>

            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route exact path = "/myfirstreact/employees" element = {<Employee/>}/>
                { <Route exact path = "/myfirstreact/add" element = {<AddEmployee/>}/> }
                <Route exact path = "/myfirstreact/employees/edit/:employeeId" element = {<AddEmployee/>}/>
                <Route exact path = "*" element = {<PageNotFound/>}/>
            </Routes>
            
        </div>
    )
}
export default Router;