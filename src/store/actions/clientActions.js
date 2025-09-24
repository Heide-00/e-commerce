export const setUser = (user) => ({ 
    type: 'SET_USER', payload: user 
});
export const setRoles = (roles) => ({ 
    type: 'SET_ROLES', payload: roles 
});
export const setTheme = (theme) => ({
     type: 'SET_THEME', payload: theme 
    });
export const setLanguage = (lang) => ({ 
    type: 'SET_LANGUAGE', payload: lang 
});
export const setAddressList = (list) => ({
  type: 'SET_ADDRESS_LIST',
  payload: list,
});

export const setCreditCards = (cards) => ({
  type: 'SET_CREDIT_CARDS',
  payload: cards,
});