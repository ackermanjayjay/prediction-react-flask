import axios from 'axios'
export async function GetAPiFlask  (){
    const response = await axios.get('http://127.0.0.1:5000/api/data')
    return response
}
export async function PostAPiFlask() {
    const response = await axios.post('http://127.0.0.1:5000/api/input')
    return response
}