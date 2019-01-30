let API_URL;
if (process.env.BACKEND_API_URL) {
  API_URL = process.env.BACKEND_API_URL;
} else {
  API_URL = "";
}

export default API_URL;
