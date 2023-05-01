import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { reducer, RootState } from './reducers';
import { createStore, Store } from 'redux';


const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});