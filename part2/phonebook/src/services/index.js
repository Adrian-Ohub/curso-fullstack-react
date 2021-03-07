import axios from "axios";

const url = "http://localhost:3001/persons";

export const getAll = () => {
  return axios.get(url).then((response) => {
    const { data } = response;
    return data;
  });
  //Otra forma de extraerlo
  /*
  const request = axios.get(url)
  return request.then(response => response.data)
  */
};

export const addPerson = ({ personObject }) => {
  return axios.post(url, personObject).then((response) => {
    const { data } = response;
    return data;
  });
};

export const changeNumberPerson = ({ personObject }) => {
  return axios
    .put(`${url}/${personObject.id}`, personObject)
    .then((response) => {
      const { data } = response;
      return data;
    });
};

export const deletePerson = ({ idPerson }) => {
  return axios
    .delete(`${url}/${idPerson}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return console.log(error);
    });
};
