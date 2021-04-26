const serverIP = "http://77.73.70.83:8082";

function addIP(url) {
  return `${serverIP}${url}`;
}

export const GET_CONTRACTS = addIP("/get-all-contracts");