import fetch from "node-fetch";

export default function(app) {
  return {
    getUserOwnedItems(id) {
      return fetch(`http://localhost:3001/items/?itemowner=${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    },

    getBorrowedItems(id) {
      return fetch(`http://localhost:3001/items/?borrower=${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    },
    getItemownerUser(id) {
      return fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    },

    getBorrower(id) {
      return fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
    }
  };
}
