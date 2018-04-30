import DataLoader from "dataloader";
import {
  getUserOwnedItems,
  getBorrowedItems,
  getItemownerUser,
  getBorrower
} from "./jsonServer";

export function Loaders() {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getUserOwnedItems(id)))
    ),
    BorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => getBorrowedItems(id)))
    ),
    ItemownerUser: new DataLoader(ids =>
      Promise.all(ids.map(id => getItemownerUser(id)))
    ),
    ItemBorrower: new DataLoader(ids =>
      Promise.all(ids.map(id => getBorrower(id)))
    )
  };
}
