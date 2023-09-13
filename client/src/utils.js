import axios from "axios";

const getAll = (url) => {
  return axios.get(url);
};

const getById = (url, id) => {
  return axios.get(`${url}/${id}`);
};

const add = (url, obj) => {
  return axios.post(url, obj);
};

const update = (url, id, obj) => {
  return axios.put(`${url}/${id}`, obj);
};

const remove = (url, id) => {
  return axios.delete(`${url}/${id}`);
};

export { getAll, getById, add, update, remove };
