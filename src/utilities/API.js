import axios from "axios";

 export default {
   foundEmployees: function() {
     return axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
   }
 };