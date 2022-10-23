import { createAndFillCustomerStore } from "./customers";
import { createPersonaStore } from "./personas";

export const SUPPORT_IDB = !!indexedDB;

export * from "./customers";
export * from "./personas";

import personas from "../public/data/personas.json";
export type Persona = typeof personas.personas[0];

import user from "../public/data/user.json";
export type User = typeof user;

export type DbOperation<T = IDBDatabase> = (db: IDBDatabase) => Promise<T>;

export type StoreDBOperation = (db: IDBDatabase) => Promise<IDBObjectStore>;

export type StoreOperation<T = IDBObjectStore> = (
  store: IDBObjectStore
) => Promise<T>;

export const asyncTransaction = (transaction: IDBTransaction) =>
  new Promise((res, rej) => {
    transaction.addEventListener("abort", rej);
    transaction.addEventListener("complete", res);
    transaction.addEventListener("error", rej);
  });

export const createDb = (db: IDBDatabase) => {
  createAndFillCustomerStore(db);
  createPersonaStore(db);

  return Promise.resolve(db);
};

const DB_NAME = "demo-AppData";

const initDB = (ev: any) => createDb(ev.target.result);

const openDB = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    if (!SUPPORT_IDB) reject();

    const request = indexedDB.open(DB_NAME, 1);
    request.addEventListener("error", reject);
    request.addEventListener("success", (ev: any) => resolve(ev.target.result));
    request.addEventListener("upgradeneeded", initDB);
  }).then((db) => {
    db.addEventListener("error", (ev) => console.error(ev));
    return db;
  });

export const db = await openDB();
export default db;
