import { setRoles } from "../actions/clientActions";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    if (roles.length === 0) {
      try {
        const response = await fetch("/api/roles"); 
        if (!response.ok) throw new Error("Roles fetch failed");

        const data = await response.json();
        dispatch(setRoles(data));
      } catch (error) {
        console.error("Roles fetch error:", error.message);
      }
    }
  };
};