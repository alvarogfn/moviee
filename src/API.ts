import axios from "axios";
import { ExpandedMovie } from "./models/ExpandedMovie";
import { ResumedMovie } from "./models/ResumedMovie";

const omdbInstance = axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 3000,
  params: {
    apikey: "4f99fbd9",
  },
});

export const omdb = {
  name: async (name: string) => {
    const response = await omdbInstance.get("", { params: { s: name } });

    if (!response.data.Response) throw new Error("Request Failed");

    const { data } = response;

    if (!data.Search || !data.totalResults) throw new Error("Not found Movies");

    return {
      movies: data.Search as ResumedMovie[],
      total: data.totalResults as number,
    };
  },
  id: async (id: string) => {
    const response = await omdbInstance.get("", { params: { i: id } });

    if (!response.data.Response) throw new Error("Request Failed");

    const { data } = response;

    return data as ExpandedMovie;
  },
  title: (title: string) => omdbInstance.get("", { params: { t: title } }),
};
