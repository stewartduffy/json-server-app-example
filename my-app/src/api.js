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

export const postSignUp = ({ data }) => {
  const path = "/sign-up/";
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

export const verifyToken = ({ token }) => {
  const path = "/verify/";
  return fetch(`${getAPIUrl()}${path}`, {
    headers: {
      ...getHeaders(),
      token
    }
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
