
//api url http://localhost:4000/stocks  to fetch all stocks data
//import axios
import axios from 'axios';
//create a function to fetch all stocks data asynchrnously
// export const getAllStocks = () => {
//     return axios.get('http://localhost:4000/stocks');
// }

//create a function to fetch all stocks data asynchrnously data is in json format
export const getAllStocks = async () => {
    const response = await axios.get('http://localhost:4000/stocks');
    //console.log('first' ,response.data)
    return response.data;
}