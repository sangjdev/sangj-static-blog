// Action Types
const INCREMENT = 'INCREMENT';

// Action Creators
export function increase() {
  return { type: INCREMENT };
}

// Initial State
const initialState = { number: 0 };

// Reducer Function
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    // do reducer stuff
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    //   return applyGetProductsMain(state, action);

    default:
      return state;
  }
}

// 3대요소
// 액션 타입
// 액션 생성자
// 리듀서 함수

// 초기값
