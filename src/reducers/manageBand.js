let id = 0
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}
    case 'ADD_BAND':
      id++
      const band = {text: action.band.text, id: id}
      return { bands: state.bands.concat(band) }
    default:
      return state;
  }
};
