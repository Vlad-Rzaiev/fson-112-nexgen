export const addDataToLocalStorage = (key, value) => {
  try {
    const normalizedState = JSON.stringify(value);
    localStorage.setItem(key, normalizedState);
  } catch (err) {
    console.log(err);
  }
};

export const getDataFromLocalStorage = key => {
  try {
    const LSData = localStorage.getItem(key);
    return LSData === null ? undefined : JSON.parse(LSData);
  } catch (err) {
    console.log(err);
  }
};

export const removeDataFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const clearDataFromLocalStorage = () => {
  localStorage.clear();
};
