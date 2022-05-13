import { UPDATE_USER } from "../CONSTANTS"

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: { ...user }
})
