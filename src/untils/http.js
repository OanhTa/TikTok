import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async(path, options = {})=>{
    const response = await request.get(path, options);
    return response.data
}
//khi gọi hàm trả về một promise
export default request