import axios from "axios";

export default axios.create({
  baseURL: "http://44.210.14.76:9000",
  headers: {
    "Content-type": "application/json"
  }
});