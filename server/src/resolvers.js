import fetch from "node-fetch";
const resolveFunctions = {
  // Resolvers go here...
  Query: {
    items(root) {
      return fetch(`http://localhost:3001/items`).then(response =>
        response.json()
      );
    },
    users(root) {
      return fetch(`http://localhost:3001/users`).then(response =>
        response.json()
      );
    },
    item(root, { id }) {
      return fetch(`http://localhost:3001/items/${id}`).then(res => res.json());
    },
    user(root, { id }) {
      return fetch(`http://localhost:3001/users/${id}`).then(res => res.json());
    }
  },
  Item: {
    async borrower({ borrower }) {
      const user = await fetch(`http://localhost:3001/users/${borrower}`);
      const json = await user.json();
      if (!json.id) return null;
      return json;
    },
    itemowner({ itemowner }) {
      return fetch(`http://localhost:3001/users/${itemowner}`).then(res =>
        res.json()
      );
    }
  },
  User: {
    borroweditems({ id }) {
      return fetch(`http://localhost:3001/items/?borrower=${id}`).then(res =>
        res.json()
      );
    },
    owneditems({ id }) {
      return fetch(`http://localhost:3001/items/?itemowner=${id}`).then(res =>
        res.json()
      );
    }
  }
};
export default resolveFunctions;
