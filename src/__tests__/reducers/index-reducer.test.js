import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('Check that initial state of tapListReducer matches root reducer', () => {
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });
  
  test('Check that initial state of tapListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_TAP',
      brewery: 'Breakside',
      beer: 'Wanderlust',
      style: 'IPA',
      price: '6',
      abv: '5.5',
      count: 142,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});