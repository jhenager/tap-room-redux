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
    }

    test('Should successfully add new tap data to masterTapList', () => {
      const { brewery, beer, style, price, abv, count, id } = postData;
      action = {
        type: 'ADD_POST',
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
})