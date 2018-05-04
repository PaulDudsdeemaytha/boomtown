import fetch from "node-fetch";
// import {
//   getUserOwnedItems,
//   getBorrowedItems,
//   getItem,
//   getUser
// } from "./jsonServer";

//

export default function({ jsonResources }) {
  return {
    // Resolvers go here...
    Query: {
      items(root) {
        return jsonResources.items();
        //  fetch(`http://localhost:3001/items`).then(response =>
        //   response.json()
      },
      users(root) {
        return jsonResources.users();
        // fetch(`http://localhost:3001/users`).then(response =>
        //   response.json()
      },
      item(root, { id }) {
        return jsonResources.item(id);
        // fetch(`http://localhost:3001/items/${id}`).then(res =>
        //   res.json()
        // );
      },
      user(root, { id }) {
        return jsonResources.user(id);
        // fetch(`http://localhost:3001/users/${id}`).then(res =>
        //   res.json()
        // );
      }
    },

    Item: {
      async borrower({ borrower }, args, context) {
        // const user = await fetch(`http://localhost:3001/users/${borrower}`);
        // const json = await user.json();
        // if (!json.id) return null;
        return borrower
          ? await context.loaders.ItemBorrower.load(borrower)
          : null;
      },
      itemowner({ itemowner }, args, context) {
        // return fetch(`http://localhost:3001/users/${itemowner}`).then(res =>
        // res.json()
        return context.loaders.ItemownerUser.load(itemowner);
      }
    },

    User: {
      borroweditems({ id }, args, context) {
        // return fetch(`http://localhost:3001/items/?borrower=${id}`).then(res =>
        //   res.json()
        // );
        return context.loaders.ItemBorrower.load(itemowner);
      },
      owneditems({ id }, args, context) {
        // return fetch(`http://localhost:3001/items/?itemowner=${id}`).then(res =>
        //   res.json()
        // );
        return context.loaders.UserOwnedItems.load(itemowner);
      }
    },
    //mutation
    Mutation: {
      addItem(root, item) {
        const newItem = {
          title: item.title,
          description: item.description,
          imageurl: item.imageurl,
          tags: item.tags,
          itemowner: item.itemowner,
          created: item.created,
          available: item.available,
          borrower: item.borrower
        };
        return fetch(`http://localhost:3001/items`, {
          body: JSON.stringify(newItem),
          method: "POST",
          headers: {
            "content-type": "application/json"
          }
        }).then(resp => resp.json());
        return newItem;
      }
    }
  };
}
// export default resolveFunctions;
