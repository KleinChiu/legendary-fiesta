import { asyncTransaction, DbOperation, Persona, StoreDBOperation } from ".";

const STORE_NAME = "personas";

export const createPersonaStore: DbOperation = (db) => {
  const store = db.createObjectStore(STORE_NAME, { autoIncrement: true });

  return asyncTransaction(store.transaction).then(() => db);
};

export const openPersonaStore: StoreDBOperation = (db) =>
  Promise.resolve(
    db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME)
  );

export const addAllPersonas =
  (personas: Persona[]) => (store: IDBObjectStore) =>
    personas.map((p) => store.put(p));
