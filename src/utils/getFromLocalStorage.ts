const getFromLocalStorage = (key: string) => {
  const parsedData = JSON.parse(localStorage.getItem(key) ?? `{}`);
  return parsedData;
};

export default getFromLocalStorage;
