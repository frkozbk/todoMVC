import axios from "axios";

// axios istekleri için bir base location belirle
var instance = axios.create({
    baseURL: "https://todosmv.herokuapp.com/"
});



export default instance