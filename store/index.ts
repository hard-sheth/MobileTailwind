// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from '@react-native-async-storage/async-storage';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
// // Define the state type
// interface CounterState {
//   count: number;
// }



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

// const rootReducer = combineReducers({
//   app: reducer,
// });

// const persistConfig = {
//   key: 'Count',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: false,
//       },
//     }),
// });

// export const persistor = persistStore(store);


import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer, { RootState } from './appslicers';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()

export { store, persistor };