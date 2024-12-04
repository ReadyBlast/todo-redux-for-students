import { createStore } from "redux";

let countId = 0;

const defaultState = [
  {
    id: countId++,
    text: "Помыть кота",
    status: true,
  },
];

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: countId++,
          text: action.text,
          status: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CHANGE_DONE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      });

    default:
      return state;
  }
};

export const store = createStore(todoReducer);
