import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "CAftz2JgwT_q1UBO6KMjgwOTvS66qJk9oaV9Nj4H-nY";

async function fetchFunc(query, page = 1, perPage = 12) {
  const data = await axios.get("search/photos", {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: perPage,
    },
  });

  return data.data;
}

export default fetchFunc;
