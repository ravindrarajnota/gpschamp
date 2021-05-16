import axios from 'axios';

const STAGE = process.env.REACT_APP_STAGE;

axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response?.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export function getSubmissionById(id) {
  const url = getUrl(`/v1/submissions/get/${id}`);

  return axios.get(url).then((response) => {
    return response?.record;
  });
}

export function saveSubmission(id, data) {
  const url = getUrl('/v1/submissions/save');

  return axios.post(url, { id, data }).then((response) => {
    return response?.record;
  });
}

function getUrl(path) {
  switch (STAGE) {
    case 'local':
      return `http://localhost:3100/dev${path}`;
    case 'dev':
      return `https://9rvvwq2ju3.execute-api.us-east-1.amazonaws.com/dev${path}`;
    default:
      return `https://TODO.execute-api.us-east-1.amazonaws.com/prod${path}`;
  }
}

export function checkToken(token) {
  const url = getCaptchaValidateUrl('/v1/recaptcha/validate/token/');

  return (
    axios
      .post(url, { token })
      // axios data
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error);
      })
  );
}

export function getCaptchaValidateUrl(path) {
  switch (STAGE) {
    case 'local':
      return `http://localhost:3100/dev${path}`;
    case 'dev':
      return `https://9rvvwq2ju3.execute-api.us-east-1.amazonaws.com/dev${path}`;
    case 'prod':
      return ``;
    default:
      throw new Error(`Undefined stage ${STAGE}`);
  }
}
