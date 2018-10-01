import modules from './modules';
import { createStore as reduxCreateStore } from 'redux';
// import thunk from 'redux-thunk';

// const reducer = (state, action) => {
//   if (action.type === `INCREMENT`) {
//     return Object.assign({}, state, {
//       count: state.count + 1,
//     });
//   }
//   return state;
// };

// const initialState = { count: 0 };

const createStore = () => reduxCreateStore(modules);
// reduxCreateStore(reducer, initialState);
export default createStore;
