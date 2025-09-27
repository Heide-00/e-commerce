import { setRoles } from "../actions/clientActions";

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    if (roles.length === 0) {
      try {
        const response = await fetch("https://workintech-fe-ecommerce.onrender.com/roles");

        // HTTP durum kontrolü
        if (!response.ok) {
          throw new Error(`Roles fetch failed: ${response.status}`);
        }

        // JSON olup olmadığını kontrol et
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Sunucu JSON yerine HTML döndürüyor");
        }

        // JSON veriyi al
        const data = await response.json();

        // Redux'a aktar
        dispatch(setRoles(data));
      } catch (error) {
        console.error("Roles fetch error:", error.message || error);
      }
    }
  };
};