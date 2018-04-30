import fetch from "node-fetch";

export const getUserOwnedItems = id => {
  return fetch(`http://localhost:3001/items/?itemowner=${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getBorrowedItems = id => {
  return fetch(`http://localhost:3001/items/?borrower=${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
export const getItemownerUser = id => {
  return fetch(`http://localhost:3001/users/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getBorrower = id => {
  return fetch(`http://localhost:3001/users/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
