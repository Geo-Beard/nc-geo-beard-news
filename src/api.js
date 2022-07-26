import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://geo-beard-news.herokuapp.com/api",
});

export const fetchAllArticles = (topic) => {
  if (topic) {
    return newsApi.get(`/articles?topic=${topic}`).then(({ data }) => {
      return data.articles;
    });
  }
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchAllTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const updateArticleVotes = (article_id, inc_votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};
