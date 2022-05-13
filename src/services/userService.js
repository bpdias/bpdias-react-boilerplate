import { SYSTEM_ERROR } from "../config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_USERS } from "./CONSTANTS";

/**
 * Function to fetch all the users.
 */
 export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(GET_ALL_USERS).then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      reject(SYSTEM_ERROR);
    }
  });
};
