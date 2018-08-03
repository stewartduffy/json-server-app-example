// import { getAPIUrl, getHeaders } from "../../helpers";

const getHeaders = () => ({
  // Authorization: `Bearer ${accessToken}`,
  // Accept: 'application/vnd.paymark_api+json',
  "Content-Type": "application/json"
});

const getAPIUrl = () => {
  return "http://localhost:3333";
};

export const fetchSeries = () => {
  const path = "/series/";
  return fetch(`${getAPIUrl()}${path}`)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};

export const postLogin = ({ data }) => {
  const path = "/login/";
  return fetch(`${getAPIUrl()}${path}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};

export const postSignIn = ({ data }) => {
  const path = "/sign-in/";
  return fetch(`${getAPIUrl()}${path}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
