import Home from "./Home"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Employee from "./Employee"
import AddEmployee from './AddEmployee';

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Router basename='/index.html'>
                <Route path = "/" element = {<Home/>}/>
                <Route exact path = "/myfirstreact/employees" element = {<Employee/>}/>
                { <Route exact path = "/myfirstreact/add" element = {<AddEmployee/>}/> }
                <Route exact path = "/myfirstreact/employees/edit/:employeeId" element = {<AddEmployee/>}/>
                <Route exact path = "*" element = {<PageNotFound/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;