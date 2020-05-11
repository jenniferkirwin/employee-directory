import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
  }
};