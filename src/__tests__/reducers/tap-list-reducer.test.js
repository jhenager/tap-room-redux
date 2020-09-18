import tapListReducer from '../../reducers/tap-list-reducer'

describe('tapListReducer', () => {

    let action;
    const postData = {
      brewery: 'Breakside',
      beer: 'Wanderlust',
      style: 'IPA',
      price: '6',
      abv: '5.5',
      count: 142,
      id: 1
    }

    const currentState = {
      1: {
        brewery: 'Breakside',
        beer: 'Wanderlust',
        style: 'IPA',
        price: '6',
        abv: '5.5',
        count: 142,
        id: 1
      },
      2: {
        brewery: 'Fort George',
        beer: 'Vortex',
        style: 'IPA',
        price: '6',
        abv: '7',
        count: 142,
        id: 2
      }
    }

    test('Should successfully delete a tap', () => {
      action = {
        type: 'DELETE_TAP',
        id: 1
      };
      expect(tapListReducer(currentState, action)).toEqual({
        2: {
          brewery: 'Fort George',
          beer: 'Vortex',
          style: 'IPA',
          price: '6',
          abv: '7',
          count: 142,
          id: 2
        }
      });
    });

    test('Should successfully add new tap data to masterTapList', () => {
      const { brewery, beer, style, price, abv, count, id } = postData;
      action = {
        type: 'ADD_TAP',
        brewery: brewery,
        beer: beer,
        style: style,
        price: price,
        abv: abv,
        count: count,
        id: id
    };
    
    expect(tapListReducer({}, action)).toEqual({
      [id]: {
        brewery: brewery,
        beer: beer,
        style: style,
        price: price,
        abv: abv,
        count: count,
        id: id
      }
    });
  });

  test('Should successfully update a tap', () => {
    const { title, author, body, date, picture, vote, id } = postData;
    action = {
      type: 'ADD_TAP',
      title: title,
      author: author, 
      body: body,
      date: date,
      picture: picture,
      vote: vote,
      id: id
    }

    const stateToUpdate = tapListReducer({}, action);
      const updateAction =  {
        type: 'ADD_TAP',
        brewery: 'Breakside',
        beer: 'Wanderlust',
        style: 'IPA',
        price: '6',
        abv: '5.5',
        count: 142,
        id: id
      }
      expect(tapListReducer(stateToUpdate, updateAction)).toEqual({
        [id] : {
        brewery: 'Breakside',
        beer: 'Wanderlust',
        style: 'IPA',
        price: '6',
        abv: '5.5',
        count: 142,
        id: id
        }
      });
    });
})