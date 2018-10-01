// Action Types
const SHOWSIDEBAR = 'SHOWSIDEBAR';
const HIDESIDEBAR = 'HIDESIDEBAR';

// Action Creators
export function showSidebar() {
  return { type: SHOWSIDEBAR };
}

export function hideSidebar() {
  return { type: HIDESIDEBAR };
}

// Initial State
const initialState = { visible: false };

// Reducer function
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case SHOWSIDEBAR:
      return {
        visible: true,
      };
    case HIDESIDEBAR:
      return {
        visible: false,
      };
    default:
      return state;
  }
}
