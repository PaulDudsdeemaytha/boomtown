import fetch from "node-fetch";
import {
  getUserOwnedItems,
  getBorrowedItems,
  getItems,
  getUsers
} from "./resources/jsonServer";

export default function({ jsonResources, pgResources }) {
  return {
    // Resolvers go here...
    Query: {
      items(root) {
        return jsonResources.getItems();
      },
      users(root) {
        return jsonResources.getUsers();
      },
      item(root, { id }) {
        return jsonResources.item(id);
      },
      user(root, { id }) {
        return jsonResources.user(id);
      }
    },

    Item: {
      async borrower({ borrower }, args, context) {
        return borrower
          ? await context.loaders.ItemBorrower.load(borrower)
          : null;
      },
      itemowner({ itemowner }, args, context) {
        return context.loaders.ItemownerUser.load(itemowner);
      }
    },

    User: {
      borroweditems({ id }, args, context) {
        return context.loaders.ItemBorrower.load(itemowner);
      },
      owneditems({ id }, args, context) {
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
