import { replacer, reviver } from "./mapSerialization";

export const LOCAL_STORAGE_KEYS = {
  DECK_STATE: "deckState",
};

export const setLocalSotrageItem = (key: string, data: any): void => {
  window.localStorage.setItem(key, JSON.stringify(data, replacer));
};

export const getLocalSotrageItem = (key: string): any | null => {
  const retrievedValue = window.localStorage.getItem(key);
  if (!retrievedValue) return null;
  return JSON.parse(retrievedValue, reviver);
};

export const removeLocalStorageItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const deleteLocalStorage = (): void => {
  window.localStorage.clear();
};
