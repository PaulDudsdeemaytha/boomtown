import fetch from "node-fetch";
const resolveFunctions = {
  // Resolvers go here...
  Query: {
    items(root) {
      return fetch(`http://localhost:3003/items`).then(response =>
        response.json()
      );
    },
    users(root) {
      return fetch(`http://localhost:3003/users`).then(response =>
        response.json()
      );
    },
    item(root, { id }) {
      return fetch(`http://localhost:3003/items/${id}`).then(res => res.json());
    },
    user(root, { id }) {
      return fetch(`http://localhost:3003/users/${id}`).then(res => res.json());
    }
  },
  Item: {
    itemowner({ itemowner }) {
      return fetch(`http://localhost:3003/users/${borrower}`).then(res =>
        res.json()
      );
    },
    borrower({ borrower }) {
      return fetch(`http://localhost:3003/users/${borrower}`).then(res =>
        res.json()
      );
    }
  },
  User: {
    borroweditems({ id }) {
      return fetch(`http://localhost:3003/items/?borrower=${id}`).then(res =>
        res.json()
      );
    },
    owneditems({ id }) {
      return fetch(`http://localhost:3003/items/?itemowner=${id}`).then(res =>
        res.json()
      );
    }
  }
};
export default resolveFunctions;
