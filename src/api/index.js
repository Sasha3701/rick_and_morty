import axios from "axios";

class Api {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url,
    });
  }

  getAll = async () => {
    const res = await this.axios.get(`/character`);
    return res.data;
  };

  getCharacterByFilter = async (queryString) => {
    const res = await this.axios.get(`/character${queryString}`);
    return res.data;
  };

  getCharacterByPage = async (page, filters) => {
    const params = filters ? `${filters}page=${page}` : `/?page=${page}`
    const res = await this.axios.get(`/character${params}`);
    return res.data;
  }
}

const api = new Api("https://rickandmortyapi.com/api");

export default api;
