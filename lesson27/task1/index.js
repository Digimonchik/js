localStorage.setItem("myKey", JSON.stringify({ myKey: "value" }));

const getLocalStorageData = () => {
  console.log(Object.entries(localStorage));
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};
