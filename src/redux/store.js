import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { CharactersReducer } from "./characterReducer";


const rootReducer = combineReducers({
 characters:CharactersReducer
});



const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

