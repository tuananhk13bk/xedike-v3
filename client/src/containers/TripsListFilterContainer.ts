import { connect } from "react-redux";
import TripsListFilter from "../components/trip-list/TripsListFilter";
import { getAllProvinces } from "actions/trip/tripActions";

const mapStateToProps = (state: { [key: string]: any }) => {
  const { allProvinces } = state.tripReducer;
  return {
    allProvinces
  };
};

const mapDispatchToProps = { getAllProvinces };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsListFilter);
