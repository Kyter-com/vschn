import * as vscode from "vscode";
import axios from "axios";

import type { Story } from "./types";

const getTopFiveHundredStoryIds = async () => {
  const req = await axios
    .get<number[]>(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    )
    .then((res) => res.data)
    .catch((error) => {
      vscode.window.showErrorMessage("Error during request to HN API");
      console.error(error);
      return null;
    });

  return req;
};

const getStoryById = async (id: number): Promise<Story | null> => {
  const req = await axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((res) => res.data)
    .catch((error) => {
      vscode.window.showErrorMessage("Error during request to HN API");
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
