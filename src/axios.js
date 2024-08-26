import axios from "axios";

const instance =axios.create({
    baseURL:'http://127.0.0.1:5001/clone-e4efa/us-central1/api' //THE API (cloud function) URL
})

export default instance;