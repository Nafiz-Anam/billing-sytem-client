import axios from "axios";

// Register user
const registration = async (userData) => {
    console.log("userData", userData);
    const response = await axios.post(
        "https://ph-task-api.herokuapp.com/api/registration",
        userData
    );
    console.log("response", response);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await axios.post(
        "https://ph-task-api.herokuapp.com/api/login",
        userData
    );
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    registration,
    logout,
    login,
};

export default authService;
