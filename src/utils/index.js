export const createQueryString = (params) => {
  let result = "";
  const { name, species, type, status, gender } = params;
  if (name || species || type || status || gender) {
    result += "/?";
  }
  if (name) {
    result += `name=${name}&`;
  }
  if (species) {
    result += `species=${species}&`;
  }
  if (type) {
    result += `name=${type}&`;
  }
  if (status) {
    result += `status=${status}&`;
  }
  if (gender) {
    result += `gender=${gender}&`;
  }
  return result;
};

export const comparisonParams = (last, current) => {
  const lastParamsJson = JSON.stringify(last);
  const currentParamsJson = JSON.stringify(current);
  return lastParamsJson !== currentParamsJson;
};

export const createArrPages = (pages, currentPage) => {
  let arrPages = [];

  for (let i = 1; i <= pages; i++) {
    arrPages.push(i);
  }

  if (currentPage >= 1 && currentPage <= 3) {
    return arrPages.slice(0, 5);
  } else if (currentPage >= pages - 2) {
    return arrPages.slice(-5);
  } else {
    return arrPages.slice(currentPage - 3, currentPage + 2);
  }
};
