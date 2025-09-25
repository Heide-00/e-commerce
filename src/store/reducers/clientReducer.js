const initialState = {
  user: null,
  roles: [],
  theme: 'light',
  language: 'en',
  addressList: [],
  creditCards: []
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload };

    case 'SET_ROLES':
      return { ...state, roles: action.payload };

    case 'SET_THEME':
      return { ...state, theme: action.payload };

    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    case 'SET_ADDRESS_LIST':
      return { ...state, addressList: action.payload };

    case 'SET_CREDIT_CARDS':
      return { ...state, creditCards: action.payload };

    default:
      return state;
  }
}