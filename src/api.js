import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://geo-beard-news.herokuapp.com/api",
});

export const fetchAllArticles = (sort_by, order, topic) => {
  let apiSortBy = sort_by;
  let apiOrder = order;
  let apiTopic = topic;

  //Sets null sort_by query to backend default
  if (sort_by === null || sort_by === "Sort by...") {
    apiSortBy = "created_at";
  }

  //Sets null order query to backend default
  if (order === null) {
    apiOrder = "desc";
  }
  if (topic === null) {
    apiTopic = "";
  }

  if (topic) {
    return newsApi
      .get(`/articles?sort_by=${apiSortBy}&order=${apiOrder}&topic=${apiTopic}`)
      .then(({ data }) => {
        return data.articles;
      });
  }
  return newsApi
    .get(`/articles?sort_by=${apiSortBy}&order=${apiOrder}`)
    .then(({ data }) => {
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

export const fetchComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const addNewComment = (article_id, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const removeComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const fetchAllUsers = () => {
  return newsApi.get("/users").then(({ data }) => {
    return data.users;
  });
};
