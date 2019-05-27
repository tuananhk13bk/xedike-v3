import * as types from "../actions/trip/tripActionTypes";

const initialState = {
  allTrips: [],
  allProvinces: [],
  tripIdOnSelect: ""
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case types.SELECT_TRIP:
      return { ...state, tripIdOnSelect: payload };

    case types.GET_ALL_TRIPS:
      return { ...state, allTrips: payload };

    case types.GET_ALL_PROVINCES:
      return { ...state, allProvinces: payload };

    default:
      return state;
  }
};
