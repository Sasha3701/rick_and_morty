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
    result += `species=${status}&`;
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
