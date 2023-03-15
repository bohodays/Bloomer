interface LocalData {
  set: (key: string, value: any) => void;
  get: (key: string) => any;
  remove: (key: string) => void;
  clear: () => void;
}

export const localData: LocalData = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },
  get: (key: any) => {
    return localStorage.getItem(key);
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
