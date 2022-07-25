import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://geo-beard-news.herokuapp.com/api",
});

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
