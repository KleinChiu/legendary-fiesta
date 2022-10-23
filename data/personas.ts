import { asyncTransaction, DbOperation, Persona, StoreDBOperation } from ".";

const STORE_NAME = "personas";

export const createPersonaStore: DbOperation = (db) => {
  const store = db.createObjectStore(STORE_NAME, {
    keyPath: "name",
    autoIncrement: true,
  });

  return asyncTransaction(store.transaction).then(() => db);
};

export const openPersonaStore: StoreDBOperation = (db) =>
  Promise.resolve(
    db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME)
  );

export const getAllPersonas = (store: IDBObjectStore) =>
  new Promise<Persona[]>((res, rej) => {
    const query = store.getAll();
    query.addEventListener("error", rej);
    query.addEventListener("success", () => res(query.result));
  });

export const addAllPersonas =
  (personas: Persona[]) => (store: IDBObjectStore) =>
    Promise.resolve(personas.map((p) => store.put(p)));
