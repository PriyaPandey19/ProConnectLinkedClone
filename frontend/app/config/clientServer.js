import axios from "axios";

const clientServer = axios.create({
  baseURL: "https://proconnectlinkedclone.onrender.com/", // ✅ correct port
});

export default clientServer;