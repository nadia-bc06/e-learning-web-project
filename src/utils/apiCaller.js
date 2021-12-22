import axios from 'axios';
import * as Config from './../constants/config'

export default function callApi(endpoint , method ='GET' , data , headers){
    return axios({
        method,
        url: `${Config.API_URL}/${endpoint}`,
        data,
        headers
    }).catch(err => console.log(err))
}