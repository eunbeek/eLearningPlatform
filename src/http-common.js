import axios from "axios";

export default axios.create({
  baseURL: "http://18.224.217.240:8080/eduTerm",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*'
  }
});