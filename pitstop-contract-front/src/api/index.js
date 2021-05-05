const serverIP = "http://77.73.70.83:8082";

function addIP(url) {
  return `${serverIP}${url}`;
}

export const GET_CONTRACTS = addIP("/get-all-contracts");
export const GET_CONTRACT_BY_ID = addIP("/get-contract-details-by-id");
export const GET_CONTRACTSTYPES = addIP("/get-all-contracttypes");
export const GET_PAYMENTTYPES = addIP("/get-all-paymenttypes");
export const GET_PAYMENTVIEWS = addIP("/get-all-paymentviews");
export const GET_SPECIFICATIONS = addIP("/get-all-specifications");
export const GET_STATUSES = addIP("/get-all-statuses");

export const UPDATE_CONTRACT_DETAILS = addIP("/update-contract-details");