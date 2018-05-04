import DataLoader from "dataloader";
import {
  getUserOwnedItems,
  getBorrowedItems,
  getItemownerUser,
  getBorrower
} from "./resources/jsonServer";

export default function Loaders({ jsonResources, pgResources }) {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.getUserOwnedItems(id)))
    ),
    BorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.getBorrowedItems(id)))
    ),
    ItemownerUser: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.getItemownerUser(id)))
    ),
    ItemBorrower: new DataLoader(ids =>
      Promise.all(ids.map(id => jsonResources.getBorrower(id)))
    )
  };
}
