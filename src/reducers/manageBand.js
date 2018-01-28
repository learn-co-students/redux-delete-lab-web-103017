let myId = 0

export default function manageBand(state = {
  bands: []
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      myId++
      return { bands: state.bands.concat({text: action.band.text, id: myId}) }
    case 'DELETE_BAND':
      return { bands: state.bands.filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
