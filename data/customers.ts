import {
  asyncTransaction,
  DbOperation,
  StoreDBOperation,
  StoreOperation,
} from ".";

import { customerData } from "./customers.json";

const STORE_NAME = "customers";

export const createCustomerStore: DbOperation = (db) => {
  const store = db.createObjectStore(STORE_NAME, { keyPath: "ssn" });

  store.createIndex("name", "name", { unique: false });
  store.createIndex("email", "email", { unique: true });

  return asyncTransaction(store.transaction).then(() => db);
};

export const openCustomerStore: StoreDBOperation = (db) =>
  Promise.resolve(
    db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME)
  );

const fillCustomerStore: StoreOperation = (store) => {
  customerData.forEach((customer) => store.add(customer));
  return asyncTransaction(store.transaction).then(() => store);
};

export const createAndFillCustomerStore = (db: IDBDatabase) =>
  createCustomerStore(db)
    .then(() => openCustomerStore(db))
    .then(fillCustomerStore);
