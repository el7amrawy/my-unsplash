const search = (arr, searchString) => {
  const reg = new RegExp(searchString.toLowerCase(), "gi"),
    result = [];

  arr.forEach((val) => {
    const label = val.label.toLowerCase();
    if (reg.test(label)) {
      result.unshift(val);
    }
  });
  return result;
};

export default search;
