import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "04490b5cb1mshd7a153541966ecep19eecdjsn092fbc5d491e",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;