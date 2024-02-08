import axios from 'axios'
export async function GetAPiFlask  (){
    const response = await axios.get('http://127.0.0.1:5000/api/data')
    return response
}
export async function PostAPiFlask(formdata) {
    const response = await axios.post('http://127.0.0.1:5000/api/input',formdata)
    return response
}