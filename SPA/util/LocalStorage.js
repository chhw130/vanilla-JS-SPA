const storage = localStorage;

export const getItem = (key) => {
  try {
    const data = JSON.parse(storage.getItem(key));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (key) => {
  try {
    storage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};
