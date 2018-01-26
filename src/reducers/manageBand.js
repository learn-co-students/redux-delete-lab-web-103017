let id = 0;
export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      console.log("HERE");
      id++;
      const band = Object.assign({}, action.band, { id: id });
      console.log(band);
      return { bands: state.bands.concat(band) };
    case "DELETE_BAND":
      console.log("manageBand id", action.id);
      const bands = state.bands.filter(band => band.id !== action.id);

      return { bands };

    default:
      return state;
  }
}
