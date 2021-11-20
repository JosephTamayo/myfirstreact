import httpCommon from "../Commons/http-common";

const getEmployees = () =>{

    return httpCommon.get('/employee/employees');
}

export default {getEmployees};