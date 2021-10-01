import axios from "axios";

class Api {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url,
    });
  }

  getAll = async () => {
      const res = await this.axios.get(`/character/?name=&status=alive&species=&type=&gender=male`)
      return res.data
  }

  getCharacterByFilter = async ({ name, status, species, type, gender }) => {
    const res = await this.axios.get(`/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`)
    return res.data
}

}

const api = new Api("https://rickandmortyapi.com/api")

export default api
