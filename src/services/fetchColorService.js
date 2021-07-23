import axiosWithAuth from '../helpers/axiosWithAuth';
import axios from 'axios'


async function fetchColorService() {
    axiosWithAuth()
    return axios.get(`http://localhost:5000/api/colors`);
   
}
export default fetchColorService; 