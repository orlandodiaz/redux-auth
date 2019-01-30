let API_URL;
console.log(process.env.BACKEND_API_URL);
alert(process.env.BACKEND_API_URL);
if (process.env.BACKEND_API_URL) {
  API_URL = process.env.BACKEND_API_URL;
} else {
  API_URL = "http://localhost:8000";
}

export default API_URL;
