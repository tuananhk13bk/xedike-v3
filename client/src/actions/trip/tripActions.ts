import * as types from "./tripActionTypes";

export const selectTrip = (tripId: string) => ({
  type: types.SELECT_TRIP,
  payload: tripId
});

export const getAllTrips = (allTrips: Array<any>) => ({
  type: types.GET_ALL_TRIPS,
  payload: allTrips
});
