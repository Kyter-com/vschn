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

// TODO: Add types for what a story looks like
const getStoryById = async (id: number) => {
  const req = await axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return req;
};

const getStoriesByIds = async (ids: number[]) => {
  const req = await Promise.all(ids.map((id) => getStoryById(id)));
  return req;
};

const api = {
  getTopFiveHundredStoryIds,
  getStoriesByIds,
  getStoryById,
};

export default api;
