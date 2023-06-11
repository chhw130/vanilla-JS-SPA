export const getItem = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
