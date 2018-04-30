import fetch from "node-fetch";

export const getUserOwnedItems = id => {
  return fetch(`http://localhost:3001/items/?itemowners${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getBorrowedItems = id => {
  return fetch(`http://localhost:3001/items/?itemowners${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
export const getItem = id => {
  return fetch(`http://localhost:3001/items/?itemowners${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getUser = id => {
  return fetch(`http://localhost:3001/items/?itemowners${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
