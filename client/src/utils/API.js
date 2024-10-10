// API.js
const API_URL = 'http://localhost:4000/graphql';

const fetchJobs = async () => {
  const query = `
    query {
      jobs {
        id
        title
        company
        location
        description
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
};

const searchJobs = async (term) => {
  const query = `
    query SearchJobs($term: String!) {
      searchJobs(term: $term) {
        id
        title
        company
        location
        description
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { term } }),
  });

  const { data } = await response.json();
  return data;
};

const login = async (email, password) => {
  const mutation = `
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: mutation, variables: { email, password } }),
  });

  const { data } = await response.json();
  return data.login.token;
};

const signup = async ({ username, email, password }) => {
  const mutation = `
    mutation Signup($username: String!, $email: String!, $password: String!) {
      signup(username: $username, email: $email, password: $password) {
        token
      }
    }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: mutation, variables: { username, email, password } }),
  });

  const { data } = await response.json();
  return data.signup.token;
};

export default {
  fetchJobs,
  searchJobs,
  login,
  signup,
};
