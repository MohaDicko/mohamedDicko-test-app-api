// lib/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-staging.supmanagement.ml",
  headers: {
    Authorization: "Bearer 0000-8432-3244-0923",
    "Content-Type": "application/json",
  },
});

export default instance;
