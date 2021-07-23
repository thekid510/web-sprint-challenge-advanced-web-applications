import axiosWithAuth from '../helpers/axiosWithAuth';

async function fetchColorService() {
  return axios.get(`http://localhost:5000/api/colors`);
   

}
    
export default fetchColorService;