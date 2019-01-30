let API_URL;
// console.log(process.env.BACKEND_API_URL);

if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:8000";
} else {
  API_URL = "";
}

export default API_URL;
