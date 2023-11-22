// services/http.ts
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5454/",
});

export default http;
