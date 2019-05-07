import * as trips from "../actions/trip/tripActionTypes";

const initialState = {
  allTrips: [],
  tripIdOnSelect: ""
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case trips.SELECT_TRIP:
      return { ...state, tripIdOnSelect: payload };

    case trips.GET_ALL_TRIPS:
      return { ...state, allTrips: payload };

    default:
      return state;
  }
};
