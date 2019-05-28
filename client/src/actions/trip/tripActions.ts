import axios from "axios";
import * as types from "./tripActionTypes";
import { ThunkAction } from "redux-thunk";

export const selectTrip = (tripId: string) => ({
  type: types.SELECT_TRIP,
  payload: tripId
});

export const getAllTrips = (allTrips: Array<any>) => ({
  type: types.GET_ALL_TRIPS,
  payload: allTrips
});

export const getAllProvinces = () => (
  dispatch: (action: { [key: string]: any }) => any
) => {
  axios
    .get("http://localhost:5000/provinces")
    .then(res => dispatch({ type: types.GET_ALL_PROVINCES, payload: res.data }))
    .catch(err =>
      dispatch({ type: types.RECEIVE_TRIP_ERROR, payload: err.response.data })
    );
};
