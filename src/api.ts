import axios from "axios";

const getTopFiveHundredStoryIds = async () => {
  const req = await axios
    .get<number[]>(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return req;
};

const api = {
  getTopFiveHundredStoryIds,
};

export default api;
