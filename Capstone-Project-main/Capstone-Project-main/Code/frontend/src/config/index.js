// BASE_URL for APIS
const BASE_URL = "https://eatcost.herokuapp.com/api";
const token = localStorage.getItem("token");
const config = {
    "Authorization": `Bearer ${token}`,
};

export { config, BASE_URL };