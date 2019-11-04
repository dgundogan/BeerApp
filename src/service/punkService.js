import { config } from "../config/config";

export const get = food => {
  return fetch(`${config.api}/beers?food=` + food);
};
