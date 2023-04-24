import Config from "../config/config";
import axios from "axios";
const servicesModule = {};
// api to get all the authors
servicesModule.allAuthors = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: Config.URL + "/authors",
    headers: {},
  };

  try {
    let data = await axios.request(config);
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
// api to add authors
servicesModule.addAuthor = async (payload) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: Config.URL + "/author",
    headers: {},
    data: payload,
  };

  try {
    const data = await axios.request(config);
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
// api to edit authors
servicesModule.editAuthor = async (payload) => {
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: Config.URL + "/author",
    headers: {},
    data: payload,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
// api to delete authors
servicesModule.deleteAuthor = async (id) => {
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: Config.URL + "/author/" + id,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
// api to get dettails about author
servicesModule.authorDetails = async (id) => {
  console.log("hello");
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: Config.URL + "/author/" + id,
    headers: {},
  };

  try {
    const data = await axios.request(config);
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export default servicesModule;
