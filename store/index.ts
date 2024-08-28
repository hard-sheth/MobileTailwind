// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from '@react-native-async-storage/async-storage';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
// // Define the state type
// interface CounterState {
//   count: number;
// }

import {combineReducers} from 'redux';
import reducer from './appslicers/countSlice';
import {persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';
import {configureStore} from '@reduxjs/toolkit';

// // Define the initial state
// const initialState: CounterState = { count: 0 };

// // Define action types
// type CounterAction =
//   | { type: 'INCREMENT' }
//   | { type: 'DECREMENT' };

// // Create the counter reducer
// const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   userData: persistReducer(persistConfig, counterReducer),
// });

// export const store = configureStore({  reducer: rootReducer});
// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app: reducer,
});

const persistConfig = {
  key: 'Count',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: false,
      },
    }),
});

export const persistor = persistStore(store);
