import httpCommon from "../Commons/http-common";

const getHello = () =>{

    return httpCommon.get('/greet/hello');
}

const getHi = () =>{

    return httpCommon.get('/greet/hi');
}

export default {getHello, getHi};